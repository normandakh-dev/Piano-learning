import SwiftUI
import WebKit
import AVFoundation

struct ContentView: UIViewRepresentable {
    func makeCoordinator() -> Coordinator { Coordinator() }

    func makeUIView(context: Context) -> WKWebView {
        let configuration = WKWebViewConfiguration()
        configuration.allowsInlineMediaPlayback = true
        configuration.mediaTypesRequiringUserActionForPlayback = []
        configuration.websiteDataStore = .default()
        configuration.userContentController.add(context.coordinator, name: "nativeMicrophone")

        let webView = WKWebView(frame: .zero, configuration: configuration)
        webView.uiDelegate = context.coordinator
        webView.navigationDelegate = context.coordinator
        webView.isOpaque = false
        webView.backgroundColor = UIColor(red: 243/255, green: 245/255, blue: 232/255, alpha: 1)
        webView.scrollView.contentInsetAdjustmentBehavior = .never
        webView.scrollView.bounces = false

        guard let indexURL = Bundle.main.url(forResource: "index", withExtension: "html", subdirectory: "WebApp"),
              let webRoot = Bundle.main.resourceURL?.appendingPathComponent("WebApp") else {
            assertionFailure("Bundled Piano Dino web app is missing")
            return webView
        }
        webView.loadFileURL(indexURL, allowingReadAccessTo: webRoot)
        return webView
    }

    func updateUIView(_ webView: WKWebView, context: Context) {}

    final class Coordinator: NSObject, WKUIDelegate, WKNavigationDelegate, WKScriptMessageHandler {
        private let audioEngine = AVAudioEngine()
        private weak var webView: WKWebView?
        private var previousRMS: Float = 0
        private var isArmed = true
        private var candidateMIDI: Int?
        private var candidateCount = 0
        private var lastSentAt: TimeInterval = 0
        private var tapInstalled = false
        private var calibrationTarget: Int?
        private var calibrationSession = false
        private var captureStartedAt: TimeInterval = 0
        private var calibratedFrequencies: [Int: Double] = {
            let stored = UserDefaults.standard.dictionary(forKey: "PianoCalibrationV3") as? [String: Double] ?? [:]
            return Dictionary(uniqueKeysWithValues: stored.compactMap { key, value in Int(key).map { ($0, value) } })
        }()

        func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
            guard message.name == "nativeMicrophone", let command = message.body as? String else { return }
            if command == "start" {
                webView = message.webView
                startListening()
            } else if command.hasPrefix("calibrate:") {
                webView = message.webView
                let note = String(command.dropFirst("calibrate:".count))
                calibrationTarget = midiNumber(for: note)
                calibrationSession = true
                captureStartedAt = ProcessInfo.processInfo.systemUptime
                candidateMIDI = nil
                candidateCount = 0
                isArmed = true
                if !audioEngine.isRunning { startListening() }
            } else if command == "finishCalibration" {
                calibrationTarget = nil
                calibrationSession = false
            } else if command == "cancelCapture" {
                calibrationTarget = nil
            } else if command == "stop" {
                stopListening()
            }
        }

        private func startListening() {
            stopListening()
            let session = AVAudioSession.sharedInstance()
            session.requestRecordPermission { [weak self] allowed in
                guard allowed else {
                    DispatchQueue.main.async { self?.setStatus("Microphone permission is needed") }
                    return
                }
                DispatchQueue.main.async { self?.beginAudioEngine() }
            }
        }

        private func beginAudioEngine() {
            do {
                let session = AVAudioSession.sharedInstance()
                try session.setCategory(.playAndRecord, mode: .measurement, options: [.defaultToSpeaker, .mixWithOthers])
                try session.setActive(true)
                let input = audioEngine.inputNode
                let format = input.inputFormat(forBus: 0)
                guard format.sampleRate > 0 else { return }
                input.installTap(onBus: 0, bufferSize: 4096, format: format) { [weak self] buffer, _ in
                    self?.analyze(buffer: buffer, sampleRate: Float(format.sampleRate))
                }
                tapInstalled = true
                audioEngine.prepare()
                try audioEngine.start()
                setStatus("Real piano microphone ready")
            } catch {
                setStatus("Could not start the iPad microphone")
            }
        }

        private func stopListening() {
            if audioEngine.isRunning { audioEngine.stop() }
            if tapInstalled {
                audioEngine.inputNode.removeTap(onBus: 0)
                tapInstalled = false
            }
            try? AVAudioSession.sharedInstance().setActive(false, options: .notifyOthersOnDeactivation)
            previousRMS = 0
            isArmed = true
            candidateMIDI = nil
            candidateCount = 0
        }

        private func analyze(buffer: AVAudioPCMBuffer, sampleRate: Float) {
            guard let channel = buffer.floatChannelData?[0] else { return }
            let count = Int(buffer.frameLength)
            guard count > 512 else { return }
            var energy: Float = 0
            for index in 0..<count { energy += channel[index] * channel[index] }
            let rms = sqrt(energy / Float(count))
            let rise = rms - previousRMS
            previousRMS = previousRMS * 0.7 + rms * 0.3
            if rms < 0.004 {
                isArmed = true
                candidateMIDI = nil
                candidateCount = 0
                return
            }
            if rise > 0.0007 && rms > 0.006 { isArmed = true }
            guard isArmed, rms > 0.006, let frequency = detectedFrequency(channel, count: count, sampleRate: sampleRate) else { return }
            let rawMIDI = Int(round(69 + 12 * log2(Double(frequency) / 440)))
            let midi = nearestMIDI(to: Double(frequency))
            guard (60...72).contains(midi) else { return }
            if candidateMIDI == midi { candidateCount += 1 } else { candidateMIDI = midi; candidateCount = 1 }
            let now = ProcessInfo.processInfo.systemUptime
            if calibrationSession && calibrationTarget == nil { return }
            if calibrationTarget != nil && now - captureStartedAt > 2.4 { return }
            let requiredStableBuffers = calibrationTarget == nil ? 1 : 2
            guard candidateCount >= requiredStableBuffers, now - lastSentAt > 0.22 else { return }
            if let target = calibrationTarget {
                guard (36...96).contains(rawMIDI), rawMIDI % 12 == target % 12 else { return }
                let normalizedFrequency = Double(frequency) * pow(2, Double(target - rawMIDI) / 12)
                calibratedFrequencies[target] = normalizedFrequency
                UserDefaults.standard.set(Dictionary(uniqueKeysWithValues: calibratedFrequencies.map { (String($0.key), $0.value) }), forKey: "PianoCalibrationV3")
                calibrationTarget = nil
                isArmed = false
                lastSentAt = now
                let targetName = noteName(for: target)
                DispatchQueue.main.async { [weak self] in self?.webView?.evaluateJavaScript("window.handleNativeCalibration(\"\(targetName)\")") }
                return
            }
            isArmed = false
            lastSentAt = now
            candidateCount = 0
            let note = noteName(for: midi)
            DispatchQueue.main.async { [weak self] in
                self?.webView?.evaluateJavaScript("window.handleNativePianoNote(\"\(note)\")")
            }
        }

        private func midiNumber(for note: String) -> Int? {
            let names = ["C": 0, "C#": 1, "D": 2, "D#": 3, "E": 4, "F": 5, "F#": 6, "G": 7, "G#": 8, "A": 9, "A#": 10, "B": 11]
            guard let octave = note.last.flatMap({ Int(String($0)) }) else { return nil }
            let name = String(note.dropLast())
            return names[name].map { (octave + 1) * 12 + $0 }
        }

        private func noteName(for midi: Int) -> String {
            let names = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]
            return names[midi % 12] + String(midi / 12 - 1)
        }

        private func referenceFrequency(for midi: Int) -> Double {
            if let exact = calibratedFrequencies[midi] { return exact }
            if midi == 72, let c = calibratedFrequencies[60] { return c * 2 }
            let offsets = calibratedFrequencies.map { midiValue, frequency in
                1200 * log2(frequency / (440 * pow(2, Double(midiValue - 69) / 12)))
            }
            let cents = offsets.isEmpty ? 0 : offsets.reduce(0, +) / Double(offsets.count)
            return 440 * pow(2, (Double(midi - 69) + cents / 100) / 12)
        }

        private func nearestMIDI(to frequency: Double) -> Int {
            return (60...72).min { abs(log2(frequency / referenceFrequency(for: $0))) < abs(log2(frequency / referenceFrequency(for: $1))) } ?? 60
        }

        private func detectedFrequency(_ samples: UnsafePointer<Float>, count: Int, sampleRate: Float) -> Float? {
            let minLag = max(1, Int(sampleRate / 950))
            let maxLag = min(count / 2, Int(sampleRate / 105))
            var bestLag = 0
            var bestCorrelation: Float = 0
            for lag in minLag...maxLag {
                var cross: Float = 0
                var energyA: Float = 0
                var energyB: Float = 0
                let length = count - lag
                for index in 0..<length {
                    let a = samples[index], b = samples[index + lag]
                    cross += a * b; energyA += a * a; energyB += b * b
                }
                let correlation = cross / max(0.000001, sqrt(energyA * energyB))
                if correlation > bestCorrelation { bestCorrelation = correlation; bestLag = lag }
            }
            guard bestLag > 0, bestCorrelation > 0.45 else { return nil }
            return sampleRate / Float(bestLag)
        }

        private func setStatus(_ text: String) {
            let safe = text.replacingOccurrences(of: "'", with: "\\'")
            webView?.evaluateJavaScript("setInputModeStatus('\(safe)')")
        }
        func webView(
            _ webView: WKWebView,
            requestMediaCapturePermissionFor origin: WKSecurityOrigin,
            initiatedByFrame frame: WKFrameInfo,
            type: WKMediaCaptureType,
            decisionHandler: @escaping (WKPermissionDecision) -> Void
        ) {
            decisionHandler(type == .microphone ? .grant : .deny)
        }

        func webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction,
                     decisionHandler: @escaping (WKNavigationActionPolicy) -> Void) {
            if let url = navigationAction.request.url,
               !url.isFileURL,
               navigationAction.navigationType == .linkActivated {
                UIApplication.shared.open(url)
                decisionHandler(.cancel)
                return
            }
            decisionHandler(.allow)
        }
    }
}
