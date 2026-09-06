# Piano Sprouts

Piano Sprouts is a browser-based piano-learning prototype designed for children ages 3–7, with three main paths:

1. **Practice songs** — browse 120 piano-friendly melodies in guided, note-by-note Wait Mode.
2. **Play full songs** — use the separate performance catalog with falling notes and strict scoring.
3. **Take lessons** — progress through 40 lessons from Foundation to Intermediate, with four checkpoint exams.

## Run locally

The app has no build step or third-party JavaScript dependencies. Serve the folder over localhost so microphone and MIDI permissions work. With Node.js:

```powershell
node server.mjs
```

Then open `http://localhost:4173`.

Python's built-in server also works: `python -m http.server 4173`.

## Included in this prototype

- Responsive home, catalog, lesson-path, and practice screens
- Exactly 120 catalog entries
- Kids & Folk, Classical, Christian & Hymns, and Ragtime categories
- Twenty dedicated public-domain-friendly hymns and spirituals, plus existing sacred classics
- Search and difficulty filters
- Full-song performance page for every catalog piece
- Falling notes aligned to their matching piano keys
- Live correct, missed, wrong, and strict percentage scoring
- Immediate key guidance that clears after a correct real-piano or screen-key press
- Interactive one-octave practice piano with synthesized sound
- Computer keyboard controls (`A S D F G H J` for white keys)
- Correct/wrong note feedback, progress, and accuracy
- Music phrase preview
- Experimental monophonic microphone pitch recognition
- Web MIDI input for compatible browsers and digital pianos
- Forty progressive lessons across Foundation, Beginner, Early Intermediate, and Intermediate levels
- Automatic movement into the next lesson after completion
- Checkpoint exams after lessons 10, 20, 30, and 40
- Exams hide key hints and require at least 80% to unlock the next lesson

Microphone recognition in this browser prototype is intended for isolated notes in a quiet room. Production-quality acoustic-piano transcription should use the native DSP architecture described in `ARCHITECTURE.md`.

## Full-song scoring

The performance score is intentionally strict:

```text
correct notes / (correct notes + missed notes + wrong presses)
```

This means a run can finish at 100% only when every note is played correctly inside its timing window with no extra wrong key presses.
