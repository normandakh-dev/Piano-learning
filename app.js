const rawSongs = `
Twinkle, Twinkle, Little Star|Traditional French melody
Mary Had a Little Lamb|Traditional
Frère Jacques|Traditional French
London Bridge Is Falling Down|Traditional English
Row, Row, Row Your Boat|Traditional
Old MacDonald Had a Farm|Traditional
Jingle Bells|James Lord Pierpont
Silent Night|Franz Xaver Gruber
Amazing Grace|Traditional
When the Saints Go Marching In|Traditional
Oh! Susanna|Stephen Foster
Camptown Races|Stephen Foster
Beautiful Dreamer|Stephen Foster
Home on the Range|Traditional
Yankee Doodle|Traditional
Aura Lee|George R. Poulton
Greensleeves|Traditional English
Scarborough Fair|Traditional English
Danny Boy (Londonderry Air)|Traditional Irish
Auld Lang Syne|Traditional Scottish
The Blue Bells of Scotland|Traditional Scottish
Shenandoah|Traditional American
The Entertainer|Scott Joplin
Maple Leaf Rag|Scott Joplin
The Easy Winners|Scott Joplin
Elite Syncopations|Scott Joplin
Solace|Scott Joplin
The Ragtime Dance|Scott Joplin
We Wish You a Merry Christmas|Traditional English
Deck the Hall|Traditional Welsh
Minuet in G major, BWV Anh. 114|Christian Petzold
Minuet in G minor, BWV Anh. 115|Christian Petzold
Prelude in C major, BWV 846|Johann Sebastian Bach
Musette in D major, BWV Anh. 126|Bach notebook tradition
Invention No. 1 in C major, BWV 772|Johann Sebastian Bach
Invention No. 8 in F major, BWV 779|Johann Sebastian Bach
Jesu, Joy of Man's Desiring|Johann Sebastian Bach
Air on the G String|Johann Sebastian Bach
Sheep May Safely Graze|Johann Sebastian Bach
Arioso, BWV 156|Johann Sebastian Bach
Canon in D|Johann Pachelbel
Sarabande in D minor, HWV 437|George Frideric Handel
Largo (Ombra mai fu)|George Frideric Handel
Hallelujah Chorus|George Frideric Handel
Ode to Joy|Ludwig van Beethoven
Für Elise|Ludwig van Beethoven
Moonlight Sonata, Movement I|Ludwig van Beethoven
Pathétique Sonata, Movement II|Ludwig van Beethoven
Minuet in G major, WoO 10 No. 2|Ludwig van Beethoven
Ecossaise in G major, WoO 23|Ludwig van Beethoven
Turkish March (Rondo Alla Turca)|Wolfgang Amadeus Mozart
Piano Sonata in C major, K. 545|Wolfgang Amadeus Mozart
Ah vous dirai-je, Maman, Theme|Wolfgang Amadeus Mozart
Piano Sonata in A major, K. 331|Wolfgang Amadeus Mozart
Eine kleine Nachtmusik, Theme|Wolfgang Amadeus Mozart
Lacrimosa from Requiem|Wolfgang Amadeus Mozart
Sonatina in C major, Op. 36 No. 1|Muzio Clementi
Sonatina in G major, Op. 36 No. 2|Muzio Clementi
Andante in C major|Joseph Haydn
Surprise Symphony Theme|Joseph Haydn
Prelude in E minor, Op. 28 No. 4|Frédéric Chopin
Raindrop Prelude, Op. 28 No. 15|Frédéric Chopin
Nocturne in E-flat major, Op. 9 No. 2|Frédéric Chopin
Nocturne in B-flat minor, Op. 9 No. 1|Frédéric Chopin
Nocturne in C-sharp minor, Op. posth.|Frédéric Chopin
Waltz in A minor, B. 150|Frédéric Chopin
Minute Waltz, Op. 64 No. 1|Frédéric Chopin
Étude in E major, Op. 10 No. 3|Frédéric Chopin
Funeral March from Sonata No. 2|Frédéric Chopin
Mazurka in F major, Op. 68 No. 3|Frédéric Chopin
Melody, Op. 68 No. 1|Robert Schumann
The Wild Horseman, Op. 68 No. 8|Robert Schumann
The Happy Farmer, Op. 68 No. 10|Robert Schumann
First Loss, Op. 68 No. 16|Robert Schumann
Träumerei, Op. 15 No. 7|Robert Schumann
Morning Prayer, Op. 39 No. 1|Pyotr Ilyich Tchaikovsky
March of the Wooden Soldiers|Pyotr Ilyich Tchaikovsky
The Sick Doll, Op. 39 No. 6|Pyotr Ilyich Tchaikovsky
Old French Song, Op. 39 No. 16|Pyotr Ilyich Tchaikovsky
Sweet Dream, Op. 39 No. 21|Pyotr Ilyich Tchaikovsky
Swan Lake Theme|Pyotr Ilyich Tchaikovsky
Dance of the Sugar Plum Fairy|Pyotr Ilyich Tchaikovsky
Sleeping Beauty Waltz|Pyotr Ilyich Tchaikovsky
Lullaby, Op. 49 No. 4|Johannes Brahms
Waltz in A-flat major, Op. 39 No. 15|Johannes Brahms
Hungarian Dance No. 5|Johannes Brahms
Spring Song, Op. 62 No. 6|Felix Mendelssohn
Wedding March|Felix Mendelssohn
Morning Mood|Edvard Grieg
In the Hall of the Mountain King|Edvard Grieg
Arietta, Op. 12 No. 1|Edvard Grieg
Liebesträum No. 3|Franz Liszt
Consolation No. 3|Franz Liszt
Clair de lune|Claude Debussy
Arabesque No. 1|Claude Debussy
Rêverie|Claude Debussy
The Girl with the Flaxen Hair|Claude Debussy
Gymnopédie No. 1|Erik Satie
Gnossienne No. 1|Erik Satie
Gymnopédie No. 3|Erik Satie
Jesus Loves Me|William B. Bradbury
What a Friend We Have in Jesus|Charles C. Converse
Blessed Assurance|Phoebe P. Knapp
Be Thou My Vision|Traditional Irish hymn
Holy, Holy, Holy|John B. Dykes
Nearer, My God, to Thee|Lowell Mason
It Is Well with My Soul|Philip P. Bliss
Rock of Ages|Thomas Hastings
Come Thou Fount of Every Blessing|Traditional Nettleton tune
Joyful, Joyful, We Adore Thee|Beethoven hymn adaptation
O Come, All Ye Faithful|Traditional
Away in a Manger|Traditional
All Things Bright and Beautiful|William H. Monk
Crown Him with Many Crowns|George Job Elvey
Praise to the Lord, the Almighty|German chorale
This Little Light of Mine|Traditional gospel
He's Got the Whole World in His Hands|Traditional spiritual
Swing Low, Sweet Chariot|Traditional spiritual
Go Tell It on the Mountain|Traditional spiritual
Were You There|Traditional spiritual`.trim();

const christianSongTitles = new Set([
  "Silent Night", "Amazing Grace", "Jesu, Joy of Man's Desiring", "Hallelujah Chorus",
  "Jesus Loves Me", "What a Friend We Have in Jesus", "Blessed Assurance", "Be Thou My Vision",
  "Holy, Holy, Holy", "Nearer, My God, to Thee", "It Is Well with My Soul", "Rock of Ages",
  "Come Thou Fount of Every Blessing", "Joyful, Joyful, We Adore Thee", "O Come, All Ye Faithful",
  "Away in a Manger", "All Things Bright and Beautiful", "Crown Him with Many Crowns",
  "Praise to the Lord, the Almighty", "This Little Light of Mine",
  "He's Got the Whole World in His Hands", "Swing Low, Sweet Chariot", "Go Tell It on the Mountain", "Were You There"
]);

const songs = rawSongs.split("\n").map((line, index) => {
  const [title, composer] = line.split("|");
  const isChristian = christianSongTitles.has(title);
  const category = isChristian ? "Christian & Hymns" : composer === "Scott Joplin" ? "Ragtime" : index < 22 || ["We Wish You a Merry Christmas", "Deck the Hall"].includes(title) ? "Kids & Folk" : "Classical";
  const difficulty = isChristian ? (index % 4 === 0 ? "Intermediate" : "Beginner") : index < 22 ? "Beginner" : index < 61 ? "Intermediate" : "Advanced";
  const minutes = difficulty === "Beginner" ? 2 + (index % 3) : difficulty === "Intermediate" ? 4 + (index % 4) : 6 + (index % 5);
  return { id: index + 1, title, composer, category, difficulty, minutes };
});

const lessons = [
  { number: 1, title: "Meet the keyboard", detail: "Find groups of two and three black keys", duration: "4 min", notes: ["C4", "D4", "E4", "F4"] },
  { number: 2, title: "Your first five notes", detail: "C, D, E, F and G with the right hand", duration: "6 min", notes: ["C4", "D4", "E4", "F4", "G4"] },
  { number: 3, title: "A steady pulse", detail: "Play in time with a simple beat", duration: "5 min", notes: ["C4", "C4", "G4", "G4", "A4", "A4", "G4"] },
  { number: 4, title: "Steps and skips", detail: "Recognize how melodies move", duration: "7 min", notes: ["C4", "E4", "D4", "F4", "E4", "G4", "C5"] },
  { number: 5, title: "Reading on the staff", detail: "Connect written notes to the keys", duration: "8 min", notes: ["E4", "G4", "F4", "D4", "C4"] },
  { number: 6, title: "Simple rhythm", detail: "Quarter notes and half notes", duration: "8 min", notes: ["C4", "C4", "D4", "E4", "E4", "D4", "C4"] },
  { number: 7, title: "Your left hand", detail: "Build balance with five new notes", duration: "9 min", notes: ["C4", "D4", "E4", "D4", "C4", "F4", "E4"] },
  { number: 8, title: "Playing softly and loudly", detail: "Control dynamics and touch", duration: "7 min", notes: ["C4", "E4", "G4", "G4", "E4", "C4"] },
  { number: 9, title: "Melody in C position", detail: "Move smoothly across five fingers", duration: "9 min", notes: ["C4", "D4", "E4", "F4", "G4", "F4", "E4", "D4", "C4"] },
  { number: 10, title: "Play your first song", detail: "Put all the foundation skills together", duration: "12 min", notes: ["E4", "E4", "F4", "G4", "G4", "F4", "E4", "D4", "C4", "D4", "E4"] },
  { kind: "exam", checkpoint: 1, title: "Foundation exam", detail: "Ten notes, no highlighted-key hints", duration: "PASS 80%", passScore: 80, notes: ["C4", "E4", "D4", "G4", "F4", "C5", "A4", "E4", "D4", "C4"] },
  { number: 11, title: "Sharps and black keys", detail: "Meet F-sharp, G-sharp and C-sharp", duration: "8 min", notes: ["F4", "F#4", "G4", "G#4", "A4", "G#4", "G4"] },
  { number: 12, title: "Intervals", detail: "Hear and play seconds, thirds and fifths", duration: "9 min", notes: ["C4", "E4", "D4", "F4", "C4", "G4"] },
  { number: 13, title: "Building a chord", detail: "Play C, E and G together as one chord", duration: "8 min", notes: ["C4", "E4", "G4", ["C4", "E4", "G4"], ["C4", "E4", "G4"]] },
  { number: 14, title: "Eighth-note motion", detail: "Play an even, quicker pulse", duration: "10 min", notes: ["C4", "D4", "E4", "F4", "G4", "A4", "G4", "F4"] },
  { number: 15, title: "Phrase and breathe", detail: "Shape a melody instead of typing notes", duration: "8 min", notes: ["E4", "F4", "G4", "C5", "G4", "F4", "E4"] },
  { number: 16, title: "Hand coordination", detail: "Prepare two-hand movement", duration: "11 min", notes: ["C4", "G4", "D4", "A4", "E4", "G4"] },
  { number: 17, title: "The sustain pedal", detail: "Connect sound without making it muddy", duration: "9 min", notes: ["C4", "E4", "G4", "C5", "G4"] },
  { number: 18, title: "Sight-reading challenge", detail: "Read without looking down", duration: "10 min", notes: ["D4", "F4", "E4", "G4", "C4", "A4", "F4"] },
  { number: 19, title: "Tempo control", detail: "Stay steady while the melody changes", duration: "10 min", notes: ["C4", "E4", "F4", "D4", "G4", "E4", "C5"] },
  { number: 20, title: "Complete performance", detail: "Play a longer phrase without stopping", duration: "14 min", notes: ["C4", "E4", "G4", "C5", "B4", "A4", "G4", "F4", "E4", "D4", "C4"] },
  { kind: "exam", checkpoint: 2, title: "Beginner checkpoint", detail: "A twelve-note performance with no key hints", duration: "PASS 80%", passScore: 80, notes: ["C4", "F4", "E4", "G4", "D4", "A4", "G4", "C5", "F4", "E4", "D4", "C4"] },
  { number: 21, title: "Major scale patterns", detail: "Use the whole octave with smooth finger changes", duration: "11 min", notes: ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5", "B4", "A4", "G4"] },
  { number: 22, title: "The sound of minor", detail: "Hear and shape darker minor-key phrases", duration: "10 min", notes: ["A4", "B4", "C5", "E4", "D4", "C4", "E4", "A4"] },
  { number: 23, title: "Broken-chord flow", detail: "Turn chords into smooth melodic patterns", duration: "12 min", notes: ["C4", "E4", "G4", "C5", "G4", "E4", "D4", "F4", "A4"] },
  { number: 24, title: "Off-beat rhythm", detail: "Feel syncopation without losing the pulse", duration: "11 min", notes: ["C4", "E4", "D4", "G4", "F4", "A4", "G4", "E4"] },
  { number: 25, title: "Alberti-bass pattern", detail: "Practice low-high-middle-high movement", duration: "12 min", notes: ["C4", "G4", "E4", "G4", "C4", "G4", "E4", "G4"] },
  { number: 26, title: "Keys of G and F", detail: "Use F-sharp and B-flat in familiar patterns", duration: "12 min", notes: ["G4", "A4", "B4", "C5", "F#4", "G4", "F4", "A4", "A#4", "G4"] },
  { number: 27, title: "Dotted rhythms", detail: "Balance long and short notes accurately", duration: "10 min", notes: ["C4", "E4", "E4", "D4", "F4", "F4", "E4", "G4"] },
  { number: 28, title: "Melody and accompaniment", detail: "Bring out the tune over a repeating pattern", duration: "13 min", notes: ["C4", "E4", "G4", "E4", "D4", "F4", "A4", "F4", "E4"] },
  { number: 29, title: "Articulation choices", detail: "Switch between smooth legato and light staccato", duration: "11 min", notes: ["C4", "D4", "E4", "G4", "F4", "E4", "D4", "C4"] },
  { number: 30, title: "Early-intermediate piece", detail: "Combine scale, chord and rhythm skills", duration: "15 min", notes: ["C4", "E4", "G4", "B4", "C5", "A4", "F4", "D4", "G4", "E4", "C4"] },
  { kind: "exam", checkpoint: 3, title: "Early-intermediate exam", detail: "Scales, accidentals and flowing patterns without hints", duration: "PASS 80%", passScore: 80, notes: ["C4", "D4", "F#4", "G4", "B4", "A4", "F4", "E4", "A#4", "G4", "D4", "C4"] },
  { number: 31, title: "Major and minor triads", detail: "Recognize the notes inside common chords", duration: "13 min", notes: ["C4", "E4", "G4", "A4", "C5", "E4", "F4", "A4", "C5"] },
  { number: 32, title: "Chord inversions", detail: "Move between chords with less hand motion", duration: "13 min", notes: ["E4", "G4", "C5", "F4", "A4", "C5", "D4", "G4", "B4"] },
  { number: 33, title: "Arpeggio technique", detail: "Shape longer broken-chord lines evenly", duration: "14 min", notes: ["C4", "E4", "G4", "C5", "G4", "E4", "C4", "D4", "F4", "A4"] },
  { number: 34, title: "Fast-note control", detail: "Keep short note groups relaxed and even", duration: "12 min", notes: ["C4", "D4", "E4", "F4", "G4", "F4", "E4", "D4", "C4", "E4", "G4"] },
  { number: 35, title: "Two musical voices", detail: "Follow an upper and lower musical idea", duration: "14 min", notes: ["C4", "G4", "D4", "A4", "E4", "B4", "F4", "C5"] },
  { number: 36, title: "Pedal and harmony", detail: "Change pedal cleanly with harmonic movement", duration: "13 min", notes: ["C4", "E4", "G4", "C5", "B4", "G4", "D4", "F4", "A4"] },
  { number: 37, title: "Reading new keys", detail: "Sight-read patterns with several accidentals", duration: "14 min", notes: ["G4", "F#4", "E4", "D4", "A4", "A#4", "G4", "F4", "C4"] },
  { number: 38, title: "Classical-style phrasing", detail: "Balance clean articulation and elegant shape", duration: "15 min", notes: ["C4", "E4", "G4", "F4", "D4", "B4", "C5", "G4", "E4"] },
  { number: 39, title: "Romantic expression", detail: "Use flexible dynamics and singing tone", duration: "15 min", notes: ["E4", "G4", "B4", "C5", "A4", "F4", "D4", "E4", "C4"] },
  { number: 40, title: "Intermediate recital", detail: "Prepare and perform a complete recital phrase", duration: "18 min", notes: ["C4", "E4", "G4", "C5", "B4", "A4", "F4", "D4", "G4", "B4", "E4", "C4"] },
  { kind: "exam", checkpoint: 4, title: "Intermediate final exam", detail: "A complete no-hint performance across all four levels", duration: "PASS 85%", passScore: 85, notes: ["C4", "E4", "F#4", "G4", "B4", "C5", "A4", "F4", "D4", "A#4", "G4", "E4", "D4", "C4"] }
];

const lessonLevels = [
  { id: "foundation", name: "Foundation", range: [1, 10], description: "First notes, rhythm and keyboard confidence", color: "#e87550" },
  { id: "beginner", name: "Beginner", range: [11, 20], description: "Reading, coordination, pedal and performance", color: "#d7a23f" },
  { id: "early-intermediate", name: "Early Intermediate", range: [21, 30], description: "Scales, harmony and flowing patterns", color: "#4d8c73" },
  { id: "intermediate", name: "Intermediate", range: [31, 40], description: "Technique, expression and recital skills", color: "#6170a5" }
];

lessons.forEach(lesson => {
  const referenceNumber = lesson.kind === "exam" ? lesson.checkpoint * 10 : lesson.number;
  lesson.level = lessonLevels.find(level => referenceNumber >= level.range[0] && referenceNumber <= level.range[1])?.id || "foundation";
});

const sequences = [
  ["C4", "C4", "G4", "G4", "A4", "A4", "G4", "F4", "F4", "E4", "E4", "D4", "D4", "C4"],
  ["E4", "D4", "C4", "D4", "E4", "E4", "E4", "D4", "D4", "D4", "E4", "G4", "G4"],
  ["E4", "E4", "F4", "G4", "G4", "F4", "E4", "D4", "C4", "C4", "D4", "E4", "E4", "D4", "D4"],
  ["G4", "E4", "E4", "F4", "D4", "D4", "C4", "D4", "E4", "F4", "G4", "G4", "G4"],
  ["C4", "E4", "G4", "C5", "G4", "E4", "C4"],
  ["A4", "G4", "F4", "E4", "D4", "C4", "D4", "E4", "F4", "G4"]
];

const pianoNotes = ["C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5"];

// A sequence is a list of steps, and a step is the set of notes to be struck together.
// Phrases stay flat to author ("C4"), a chord is written as a nested array
// (["C4","E4","G4"]), and both normalise to the same shape here.
const TROUBLE_HINT_THRESHOLD = 3;

function toSequence(notes) {
  return (notes || []).map(step => Array.isArray(step) ? [...step] : [step]);
}

function stepNotes(index) {
  return state.sequence[index] || [];
}

function hasChordStep() {
  return state.sequence.some(step => step.length > 1);
}
const keyboardMap = { a: "C4", w: "C#4", s: "D4", e: "D#4", d: "E4", f: "F4", t: "F#4", g: "G4", y: "G#4", h: "A4", u: "A#4", j: "B4", k: "C5" };

const state = {
  view: "home",
  previousView: "songs",
  filter: "All",
  fullFilter: "All",
  activeSong: null,
  activeLessonIndex: null,
  isExam: false,
  completedLessons: new Set(readLessonProgress()),
  autoAdvanceTimer: null,
  sequence: sequences[2],
  performanceMode: false,
  performance: null,
  noteIndex: 0,
  stepPressed: [],
  heldMidiNotes: new Set(),
  trouble: {},
  correct: 0,
  attempts: 0,
  inputMode: localStorage.getItem("pianoSproutsInputMode") || "screen",
  pendingLaunch: null,
  audioContext: null,
  micStream: null,
  micFrame: null,
  lastMicNote: null,
  lastMicAt: 0,
  micLevel: 0,
  micAttackUntil: 0,
  micCandidate: null,
  micCandidateFrames: 0,
  micLastAnalysisAt: 0,
  demoPlaying: false,
  demoTimers: []
};

function readLessonProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem("lentoLessonProgress") || "null");
    return Array.isArray(saved) ? saved.filter(index => Number.isInteger(index) && index >= 0 && index < lessons.length) : [0, 1, 2];
  } catch {
    return [0, 1, 2];
  }
}

function saveLessonProgress() {
  localStorage.setItem("lentoLessonProgress", JSON.stringify([...state.completedLessons].sort((a, b) => a - b)));
}

const views = {
  home: document.querySelector("#home-view"),
  songs: document.querySelector("#songs-view"),
  fullsongs: document.querySelector("#fullsongs-view"),
  lessons: document.querySelector("#lessons-view"),
  player: document.querySelector("#player-view")
};

function showView(name) {
  Object.entries(views).forEach(([key, view]) => view.classList.toggle("is-active", key === name));
  state.view = name;
  document.body.classList.toggle("is-player-screen", name === "player");
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (name === "player" && state.performanceMode) requestAnimationFrame(positionFallingNotes);
  if (name !== "player") {
    if (state.autoAdvanceTimer) {
      clearTimeout(state.autoAdvanceTimer);
      state.autoAdvanceTimer = null;
    }
    stopDemo();
    stopMicrophone();
    stopFullSong();
  }
}

function navigateTo(name) {
  if (!views[name] || name === state.view) return;
  history.pushState({ pianoDino: true, view: name, previousView: state.previousView }, "");
  showView(name);
}

function navigateBack(fallback = "home") {
  if (state.view !== "home" && history.state?.pianoDino) history.back();
  else if (state.view !== fallback) navigateTo(fallback);
}

history.replaceState({ pianoDino: true, view: "home" }, "");
window.addEventListener("popstate", event => {
  const target = event.state?.pianoDino ? event.state.view : "home";
  if (views[target]) showView(target);
});

document.querySelectorAll("[data-go]").forEach(button => button.addEventListener("click", () => {
  if (button.classList.contains("back-button")) navigateBack(button.dataset.go);
  else navigateTo(button.dataset.go);
}));

function renderSongs() {
  const query = document.querySelector("#song-search").value.trim().toLowerCase();
  const visible = songs.filter(song => (state.filter === "All" || song.category === state.filter) && (`${song.title} ${song.composer} ${song.category}`).toLowerCase().includes(query));
  document.querySelector("#song-count").textContent = `${visible.length} ${visible.length === 1 ? "song" : "songs"}`;
  document.querySelector("#song-list").innerHTML = visible.map(song => `
    <button class="song-row" data-song-id="${song.id}">
      <span class="song-index">${String(song.id).padStart(2, "0")}</span>
      <span class="song-details"><strong>${song.title}</strong><small>${song.composer}</small></span>
      <span class="song-meta"><span>${song.category}</span><small>${song.difficulty} · ${song.minutes} min</small></span>
    </button>`).join("");
  document.querySelectorAll("[data-song-id]").forEach(button => button.addEventListener("click", () => requestInputChoice("practice", songs[Number(button.dataset.songId) - 1])));
}

document.querySelector("#song-search").addEventListener("input", renderSongs);
document.querySelectorAll("[data-filter]").forEach(button => button.addEventListener("click", () => {
  state.filter = button.dataset.filter;
  document.querySelectorAll("[data-filter]").forEach(item => item.classList.toggle("is-active", item === button));
  renderSongs();
}));
document.querySelector("#shuffle-song").addEventListener("click", () => requestInputChoice("practice", songs[Math.floor(Math.random() * songs.length)]));

function renderFullSongs() {
  const query = document.querySelector("#full-song-search").value.trim().toLowerCase();
  const visible = songs.filter(song => (state.fullFilter === "All" || song.category === state.fullFilter) && (`${song.title} ${song.composer} ${song.category}`).toLowerCase().includes(query));
  document.querySelector("#full-song-count").textContent = `${visible.length} ${visible.length === 1 ? "full song" : "full songs"}`;
  document.querySelector("#full-song-list").innerHTML = visible.map(song => `
    <button class="song-row full-song-row" data-full-song-id="${song.id}">
      <span class="song-index">↓</span>
      <span class="song-details"><strong>${song.title}</strong><small>${song.composer}</small></span>
      <span class="song-meta"><span>${song.category}</span><small>${song.difficulty} · ${song.minutes} min · scored</small></span>
    </button>`).join("");
  document.querySelectorAll("[data-full-song-id]").forEach(button => button.addEventListener("click", () => requestInputChoice("full", songs[Number(button.dataset.fullSongId) - 1])));
}

document.querySelector("#full-song-search").addEventListener("input", renderFullSongs);
document.querySelectorAll("[data-full-filter]").forEach(button => button.addEventListener("click", () => {
  state.fullFilter = button.dataset.fullFilter;
  document.querySelectorAll("[data-full-filter]").forEach(item => item.classList.toggle("is-active", item === button));
  renderFullSongs();
}));
document.querySelector("#shuffle-full-song").addEventListener("click", () => requestInputChoice("full", songs[Math.floor(Math.random() * songs.length)]));

function renderLessons() {
  const completedCourseLessons = lessons.filter((lesson, index) => lesson.kind !== "exam" && state.completedLessons.has(index)).length;
  const completedItems = lessons.filter((_, index) => state.completedLessons.has(index)).length;
  const percentage = Math.round(completedItems / lessons.length * 100);
  document.querySelector("#course-percent").textContent = `${percentage}%`;
  document.querySelector("#course-progress-bar").style.width = `${percentage}%`;
  document.querySelector("#course-progress-copy").textContent = `${completedCourseLessons} of 40 lessons completed · 4 exams`;

  document.querySelector("#lesson-list").innerHTML = lessonLevels.map((level, levelIndex) => {
    const levelItems = lessons.map((lesson, index) => ({ lesson, index })).filter(item => item.lesson.level === level.id);
    const previousLevelItems = levelIndex > 0 ? lessons.map((lesson, index) => ({ lesson, index })).filter(item => item.lesson.level === lessonLevels[levelIndex - 1].id) : [];
    const previousExam = previousLevelItems.find(item => item.lesson.kind === "exam");
    const levelUnlocked = levelIndex === 0 || (previousExam && state.completedLessons.has(previousExam.index));
    const completedLevelLessons = levelItems.filter(item => item.lesson.kind !== "exam" && state.completedLessons.has(item.index)).length;
    const completedLevelItems = levelItems.filter(item => state.completedLessons.has(item.index)).length;
    const levelPercent = Math.round(completedLevelItems / levelItems.length * 100);
    const firstIncompleteLesson = levelItems.find(item => item.lesson.kind !== "exam" && !state.completedLessons.has(item.index));
    const levelState = levelPercent === 100 ? "complete" : levelUnlocked ? "active" : "locked";
    const rows = levelItems.map(({ lesson, index }) => {
      const isDone = state.completedLessons.has(index);
      const isAvailableExam = lesson.kind === "exam" && levelUnlocked;
      const isNextLesson = firstIncompleteLesson?.index === index && levelUnlocked;
      const status = isDone ? "done" : (isAvailableExam || isNextLesson) ? "current" : "locked";
      const stepLabel = status === "done" ? "✓" : status === "locked" ? "⌑" : lesson.kind === "exam" ? "★" : lesson.number;
      const hasUnfinishedLessons = lesson.kind === "exam" && completedLevelLessons < 10;
      return `
        <button class="lesson-row is-${status}${lesson.kind === "exam" ? " is-exam" : ""}${hasUnfinishedLessons ? " is-skip-exam" : ""}" data-lesson-id="${index}">
          <span class="lesson-step">${stepLabel}</span>
          <span class="lesson-info"><strong>${lesson.title}</strong><small>${hasUnfinishedLessons ? "Score 100% to skip straight to the next level" : lesson.detail}</small></span>
          <span class="lesson-duration">${hasUnfinishedLessons ? "PERFECT SCORE" : lesson.duration}${status === "current" ? " · START →" : ""}</span>
        </button>`;
    }).join("");
    return `
      <section class="level-block is-${levelState}" style="--level-color:${level.color}">
        <header class="level-header">
          <span class="level-order">${String(levelIndex + 1).padStart(2, "0")}</span>
          <span class="level-title"><small>LEVEL ${levelIndex + 1}</small><strong>${level.name}</strong><em>${level.description}</em></span>
          <span class="level-count"><strong>${completedLevelLessons}/10</strong><small>LESSONS</small></span>
          <span class="level-meter"><i style="width:${levelPercent}%"></i></span>
        </header>
        <div class="level-rows">${rows}</div>
      </section>`;
  }).join("");
  document.querySelectorAll("[data-lesson-id]").forEach(button => button.addEventListener("click", () => {
    const lesson = lessons[Number(button.dataset.lessonId)];
    if (button.classList.contains("is-locked")) return toast("Pass the previous level exam to unlock this level");
    startLesson(lesson, Number(button.dataset.lessonId));
  }));
}

function requestInputChoice(kind, song) {
  state.pendingLaunch = { kind, song };
  const modal = document.querySelector("#input-choice-modal");
  modal.hidden = false;
  requestAnimationFrame(() => modal.querySelector("[data-choose-input]")?.focus());
}

function closeInputChoice() {
  state.pendingLaunch = null;
  document.querySelector("#input-choice-modal").hidden = true;
}

async function finishInputChoice(mode) {
  const pending = state.pendingLaunch;
  if (!pending) return;
  state.pendingLaunch = null;
  document.querySelector("#input-choice-modal").hidden = true;
  state.inputMode = mode;
  localStorage.setItem("pianoSproutsInputMode", mode);
  if (pending.kind === "full") startSong(pending.song);
  else startPracticeSong(pending.song);
  await activateInputMode(mode);
}

document.querySelectorAll("[data-choose-input]").forEach(button => button.addEventListener("click", () => finishInputChoice(button.dataset.chooseInput)));
document.querySelector("#input-choice-cancel").addEventListener("click", closeInputChoice);
document.querySelector("#input-choice-modal").addEventListener("click", event => {
  if (event.target === event.currentTarget) closeInputChoice();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !document.querySelector("#input-choice-modal").hidden) closeInputChoice();
});

function startSong(song) {
  state.previousView = "fullsongs";
  state.activeSong = song;
  state.activeLessonIndex = null;
  state.isExam = false;
  state.performanceMode = true;
  state.sequence = toSequence(buildFullSequence(song));
  document.querySelector("#player-view").classList.add("is-full-song");
  document.querySelector("#player-view").classList.remove("is-exam", "is-lesson");
  document.querySelector("#player-kicker").textContent = "";
  document.querySelector("#player-title").textContent = song.title;
  document.querySelector("#player-composer").textContent = "";
  document.querySelector("#tempo-value").textContent = song.difficulty === "Beginner" ? "72" : song.difficulty === "Intermediate" ? "84" : "96";
  resetPractice();
  navigateTo("player");
}

function startPracticeSong(song) {
  state.previousView = "songs";
  state.activeSong = song;
  state.activeLessonIndex = null;
  state.isExam = false;
  state.performanceMode = false;
  let sequence = sequences[(song.id - 1) % sequences.length];
  if (song.title === "Ode to Joy") sequence = sequences[2];
  state.sequence = toSequence(sequence);
  document.querySelector("#player-view").classList.remove("is-full-song", "is-exam", "is-lesson");
  document.querySelector("#player-kicker").textContent = "SONG PRACTICE · WAIT MODE";
  document.querySelector("#player-title").textContent = song.title;
  document.querySelector("#player-composer").textContent = `${song.composer} · ${song.difficulty}`;
  document.querySelector("#tempo-value").textContent = song.difficulty === "Beginner" ? "68" : song.difficulty === "Intermediate" ? "76" : "84";
  resetPractice();
  navigateTo("player");
}

function startLesson(lesson, index) {
  state.previousView = "lessons";
  state.activeSong = null;
  state.activeLessonIndex = index;
  state.isExam = lesson.kind === "exam";
  state.performanceMode = false;
  state.sequence = toSequence(lesson.notes || sequences[index % sequences.length]);
  document.querySelector("#player-view").classList.remove("is-full-song");
  document.querySelector("#player-view").classList.add("is-lesson");
  document.querySelector("#player-view").classList.toggle("is-exam", state.isExam);
  document.querySelector("#player-kicker").textContent = state.isExam ? `CHECKPOINT EXAM ${lesson.checkpoint}` : `LESSON ${lesson.number}`;
  document.querySelector("#player-title").textContent = lesson.title;
  document.querySelector("#player-composer").textContent = lesson.detail;
  document.querySelector("#tempo-value").textContent = state.isExam ? "76" : "68";
  resetPractice();
  if (state.view === "player") showView("player");
  else navigateTo("player");
  activateInputMode(state.inputMode);
}

document.querySelector("#player-back").addEventListener("click", () => {
  stopDemo();
  stopMicrophone();
  stopFullSong();
  showView(state.previousView || "home");
  history.replaceState({ pianoDino: true, view: state.previousView || "home" }, "");
});
document.querySelector("#restart-button").addEventListener("click", resetPractice);
document.querySelector("#start-full-song").addEventListener("click", startFullSong);

function renderPiano() {
  document.querySelector("#piano").innerHTML = pianoNotes.map(note => {
    const isBlack = note.includes("#");
    const noteLabel = note.replace(/\d/g, "").replace("#", "♯");
    return `<button class="piano-key${isBlack ? " black" : ""}" data-note="${note}" aria-label="Play ${friendlyNote(note)}"><span class="piano-key-label">${noteLabel}</span></button>`;
  }).join("");
  document.querySelectorAll(".piano-key").forEach(key => {
    key.addEventListener("pointerdown", event => {
      event.preventDefault();
      key.classList.add("is-pressed");
      playTone(key.dataset.note, .48);
      handleNote(key.dataset.note, key);
    });
    ["pointerup", "pointerleave", "pointercancel"].forEach(type => key.addEventListener(type, () => key.classList.remove("is-pressed")));
  });
  requestAnimationFrame(positionFallingNotes);
}

function renderStaff() {
  const naturalOrder = ["C4","D4","E4","F4","G4","A4","B4","C5","D5","E5","F5","G5"];
  document.querySelector("#staff").innerHTML = state.sequence.map((step, index) => {
    const left = 5 + (index * 88 / Math.max(1, state.sequence.length));
    return step.map(note => {
      const level = Math.max(0, naturalOrder.indexOf(note.replace("#", "")));
      const bottom = 1 + level * 6.5;
      return `<span class="staff-note" data-staff-index="${index}" style="left:${left}%;bottom:${bottom}px" title="${note}"></span>`;
    }).join("");
  }).join("");
}

function buildFullSequence(song) {
  if (song.title === "Ode to Joy") {
    return [
      "E4","E4","F4","G4","G4","F4","E4","D4","C4","C4","D4","E4","E4","D4","D4",
      "E4","E4","F4","G4","G4","F4","E4","D4","C4","C4","D4","E4","D4","C4","C4"
    ];
  }
  if (song.title === "Twinkle, Twinkle, Little Star") {
    return [
      "C4","C4","G4","G4","A4","A4","G4","F4","F4","E4","E4","D4","D4","C4",
      "G4","G4","F4","F4","E4","E4","D4","G4","G4","F4","F4","E4","E4","D4",
      "C4","C4","G4","G4","A4","A4","G4","F4","F4","E4","E4","D4","D4","C4"
    ];
  }
  if (song.title === "Mary Had a Little Lamb") {
    return ["E4","D4","C4","D4","E4","E4","E4","D4","D4","D4","E4","G4","G4","E4","D4","C4","D4","E4","E4","E4","E4","D4","D4","E4","D4","C4"];
  }
  const base = sequences[(song.id - 1) % sequences.length];
  return [...base, ...base.slice(1).reverse(), ...base.slice(1)];
}

function createPerformance() {
  const tempo = Number(document.querySelector("#tempo-value").textContent) || 76;
  const beatMs = 60000 / tempo;
  const travelMs = 2800;
  return {
    status: "idle",
    startAt: 0,
    frame: null,
    beatMs,
    travelMs,
    hitWindowMs: 360,
    correct: 0,
    missed: 0,
    wrong: 0,
    events: state.sequence.flatMap((step, index) => step.map(note => ({ note, time: travelMs + index * beatMs, status: "pending", timingError: null })))
  };
}

function resetFullSong() {
  stopFullSong();
  state.performance = createPerformance();
  renderFallingNotes();
  updateFullSongStats();
  updateFullSongTarget();
  document.querySelector("#start-full-song").innerHTML = "Start full song <span>▶</span>";
  document.querySelector("#timing-status").textContent = `${state.sequence.length} notes · strict scoring`;
  const overlay = document.querySelector("#stage-overlay");
  overlay.classList.remove("is-hidden", "is-counting");
  document.querySelector("#overlay-title").textContent = "Ready to play?";
  document.querySelector("#overlay-copy").textContent = "Notes fall toward the line. Press the matching key when they land.";
  document.querySelector(".overlay-icon").textContent = "♪";
  setFeedback("FULL SONG MODE", "Press start when your hands are ready", "neutral");
}

function renderFallingNotes() {
  if (!state.performance) return;
  document.querySelector("#falling-notes").innerHTML = state.performance.events.map((event, index) => `
    <span class="falling-note${event.note.includes("#") ? " is-black" : ""}" data-falling-index="${index}"><b>${event.note}</b></span>
  `).join("");
  requestAnimationFrame(positionFallingNotes);
}

function positionFallingNotes() {
  if (!state.performanceMode || !state.performance) return;
  const piano = document.querySelector("#piano");
  const stage = document.querySelector("#falling-stage");
  if (!piano?.offsetWidth || !stage?.offsetWidth) return;
  const pianoRect = piano.getBoundingClientRect();
  const stageRect = stage.getBoundingClientRect();
  state.performance.events.forEach((event, index) => {
    const key = document.querySelector(`.piano-key[data-note="${event.note}"]`);
    const falling = document.querySelector(`[data-falling-index="${index}"]`);
    if (!key || !falling) return;
    const keyRect = key.getBoundingClientRect();
    const ratio = (keyRect.left - pianoRect.left + keyRect.width / 2) / pianoRect.width;
    falling.style.left = `${ratio * stageRect.width}px`;
  });
}

function startFullSong() {
  if (!state.performanceMode) return;
  if (state.performance?.status === "playing" || state.performance?.status === "countdown") resetFullSong();
  if (!state.performance || state.performance.status === "done") resetFullSong();
  const performanceState = state.performance;
  performanceState.status = "countdown";
  performanceState.startAt = performance.now() + 4000;
  document.querySelector("#start-full-song").innerHTML = "Restart song <span>↻</span>";
  const overlay = document.querySelector("#stage-overlay");
  overlay.classList.remove("is-hidden");
  overlay.classList.add("is-counting");
  setFeedback("GET READY", "Notes will move only after the count-in finishes", "neutral");
  performanceState.frame = requestAnimationFrame(animateFullSong);
}

function animateFullSong(now) {
  const performanceState = state.performance;
  if (!performanceState || !["countdown", "playing"].includes(performanceState.status)) return;
  const elapsed = now - performanceState.startAt;
  const overlay = document.querySelector("#stage-overlay");

  if (elapsed < 0) {
    const remaining = -elapsed;
    const isReadyBeat = remaining > 3000;
    const count = Math.max(1, Math.ceil(remaining / 1000));
    document.querySelector(".overlay-icon").textContent = isReadyBeat ? "♪" : String(count);
    document.querySelector("#overlay-title").textContent = isReadyBeat ? "Ready" : "Get ready";
    document.querySelector("#overlay-copy").textContent = isReadyBeat ? "Place your hands on the piano" : `First note: ${friendlyNote(performanceState.events[0].note)}`;
    document.querySelector("#timing-status").textContent = isReadyBeat ? "Ready" : `Starting in ${count}`;
  } else if (performanceState.status === "countdown") {
    performanceState.status = "playing";
    overlay.classList.add("is-hidden");
    overlay.classList.remove("is-counting");
    document.querySelector("#timing-status").textContent = "Go! First note is falling";
    setFeedback("GO", "Play each key as its note reaches the line", "neutral");
    updateFullSongTarget();
  }

  const stage = document.querySelector("#falling-stage");
  const hitY = stage.clientHeight - 24 - 54;
  performanceState.events.forEach((event, index) => {
    const element = document.querySelector(`[data-falling-index="${index}"]`);
    if (!element) return;
    const progress = (elapsed - (event.time - performanceState.travelMs)) / performanceState.travelMs;
    const y = -58 + progress * (hitY + 58);
    element.style.transform = `translateY(${y}px)`;
    element.style.opacity = progress >= 0 && progress < 1.32 ? "1" : "0";

    if (event.status === "pending" && elapsed > event.time + performanceState.hitWindowMs) {
      event.status = "missed";
      performanceState.missed += 1;
      element.classList.add("is-missed");
      setFeedback("NOTE MISSED", `${friendlyNote(event.note)} was not played in time`, "wrong");
      updateFullSongStats();
      updateFullSongTarget();
    }
    if (event.status !== "pending" && elapsed > event.time + 520) element.classList.add("is-gone");
  });

  const lastEvent = performanceState.events[performanceState.events.length - 1];
  const totalDuration = lastEvent.time + performanceState.hitWindowMs;
  updateTimingStatus(elapsed);

  if (elapsed > totalDuration && performanceState.events.every(event => event.status !== "pending")) {
    finishFullSong();
    return;
  }
  performanceState.frame = requestAnimationFrame(animateFullSong);
}

function handleFullSongNote(note, keyElement) {
  const performanceState = state.performance;
  if (!performanceState || performanceState.status !== "playing") {
    if (performanceState?.status === "idle") toast("Press Start full song first");
    return;
  }
  const elapsed = performance.now() - performanceState.startAt;
  const candidates = performanceState.events
    .map((event, index) => ({ event, index, distance: Math.abs(event.time - elapsed) }))
    .filter(item => item.event.status === "pending" && item.distance <= performanceState.hitWindowMs)
    .sort((a, b) => a.distance - b.distance);
  const candidate = candidates[0];

  if (candidate && candidate.event.note === note) {
    candidate.event.status = "correct";
    candidate.event.timingError = elapsed - candidate.event.time;
    performanceState.correct += 1;
    const falling = document.querySelector(`[data-falling-index="${candidate.index}"]`);
    falling?.classList.add("is-correct");
    document.querySelectorAll(".piano-key.is-expected").forEach(key => key.classList.remove("is-expected"));
    const timing = Math.abs(candidate.event.timingError) <= 130 ? "Perfect timing" : candidate.event.timingError < 0 ? "A little early" : "A little late";
    setFeedback("CORRECT", `${friendlyNote(note)} · ${timing}`, "correct");
    updateFullSongStats();
    setTimeout(updateFullSongTarget, 110);
  } else {
    performanceState.wrong += 1;
    const missedIndex = getCurrentPerformanceEvent(elapsed) ? performanceState.events.indexOf(getCurrentPerformanceEvent(elapsed)) : -1;
    if (missedIndex >= 0) logStepTrouble(missedIndex);
    const expected = getCurrentPerformanceEvent(elapsed)?.note;
    setFeedback("WRONG KEY", expected ? `You played ${friendlyNote(note)} · wait for ${friendlyNote(expected)}` : `${friendlyNote(note)} was outside the timing window`, "wrong");
    keyElement?.classList.add("is-wrong");
    setTimeout(() => keyElement?.classList.remove("is-wrong"), 380);
    updateFullSongStats();
  }
}

function getCurrentPerformanceEvent(elapsed = -Infinity) {
  if (!state.performance) return null;
  return state.performance.events.find(event => event.status === "pending" && event.time >= elapsed - state.performance.hitWindowMs) || null;
}

function updateFullSongTarget() {
  document.querySelectorAll(".piano-key").forEach(key => key.classList.remove("is-expected"));
  if (!state.performance || state.performance.status !== "playing") return;
  const elapsed = performance.now() - state.performance.startAt;
  const next = getCurrentPerformanceEvent(elapsed);
  if (next) document.querySelector(`.piano-key[data-note="${next.note}"]`)?.classList.add("is-expected");
}

function strictScore() {
  const performanceState = state.performance;
  if (!performanceState) return 100;
  const graded = performanceState.correct + performanceState.missed + performanceState.wrong;
  return graded ? Math.round(performanceState.correct / graded * 100) : 100;
}

function updateFullSongStats() {
  if (!state.performance) return;
  const score = strictScore();
  document.querySelector("#full-score").textContent = `${score}%`;
}

function updateTimingStatus(elapsed) {
  const next = getCurrentPerformanceEvent(elapsed);
  if (!next) return;
  const seconds = Math.max(0, (next.time - elapsed) / 1000);
  document.querySelector("#timing-status").textContent = seconds < .12 ? `Play ${next.note} now` : `Next: ${next.note} in ${seconds.toFixed(1)}s`;
}

function finishFullSong() {
  const performanceState = state.performance;
  if (!performanceState) return;
  performanceState.status = "done";
  if (performanceState.frame) cancelAnimationFrame(performanceState.frame);
  performanceState.frame = null;
  updateFullSongStats();
  updateFullSongTarget();
  const score = strictScore();
  document.querySelector("#start-full-song").innerHTML = "Play again <span>↻</span>";
  document.querySelector("#timing-status").textContent = `Final score · ${score}%`;
  const overlay = document.querySelector("#stage-overlay");
  overlay.classList.remove("is-hidden", "is-counting");
  document.querySelector(".overlay-icon").textContent = `${score}%`;
  document.querySelector("#overlay-title").textContent = score === 100 ? "Flawless performance!" : score >= 80 ? "Great work!" : "Keep practicing";
  document.querySelector("#overlay-copy").textContent = score === 100 ? "Every note was correct and on time." : `${performanceState.missed} missed and ${performanceState.wrong} wrong presses kept this run below 100%.`;
  setFeedback("SONG COMPLETE", `Your strict accuracy score is ${score}%`, score === 100 ? "correct" : "neutral");
  localStorage.setItem("lentoLastAccuracy", String(score));
  if (score === 100) playCelebration();
}

function stopFullSong() {
  if (state.performance?.frame) cancelAnimationFrame(state.performance.frame);
  if (state.performance && ["playing", "countdown"].includes(state.performance.status)) state.performance.status = "idle";
  if (state.performance) state.performance.frame = null;
}

function resetPractice() {
  stopDemo();
  if (state.autoAdvanceTimer) {
    clearTimeout(state.autoAdvanceTimer);
    state.autoAdvanceTimer = null;
  }
  if (state.performanceMode) {
    resetFullSong();
    return;
  }
  state.noteIndex = 0;
  state.stepPressed = [];
  state.heldMidiNotes.clear();
  state.trouble = readNoteTrouble();
  state.correct = 0;
  state.attempts = 0;
  renderStaff();
  updatePracticeUI();
  setFeedback(state.isExam ? "EXAM READY" : "READY WHEN YOU ARE", state.isExam ? "Read the staff and play each note without key hints" : "Play the highlighted key", "neutral");
}

function updatePracticeUI() {
  const step = stepNotes(state.noteIndex);
  const remaining = step.filter(note => !state.stepPressed.includes(note));
  document.querySelectorAll(".piano-key").forEach(key => key.classList.toggle("is-expected", !state.isExam && remaining.includes(key.dataset.note)));
  document.querySelectorAll(".staff-note").forEach(element => {
    const index = Number(element.dataset.staffIndex);
    element.classList.toggle("is-complete", index < state.noteIndex);
    element.classList.toggle("is-current", index === state.noteIndex);
    element.classList.toggle("is-tricky", (state.trouble[index] || 0) >= TROUBLE_HINT_THRESHOLD);
    element.classList.remove("is-wrong");
  });
  const positionLabel = hasChordStep() ? "Step" : "Note";
  document.querySelector("#measure-label").textContent = `${positionLabel} ${Math.min(state.noteIndex + 1, state.sequence.length)} of ${state.sequence.length}`;
  const nameElement = document.querySelector("#next-note-name");
  const isChordPrompt = !state.isExam && remaining.length > 1;
  nameElement.classList.toggle("is-chord", isChordPrompt);
  nameElement.textContent = step.length ? (state.isExam ? "?" : isChordPrompt ? remaining.map(note => note.replace(/\d/g, "")).join("+") : remaining[0]) : "✓";
  document.querySelector("#next-note-hint").textContent = practiceHint(step, remaining);
}

function practiceHint(step, remaining) {
  if (!step.length) return state.isExam ? "Exam complete" : "Phrase complete";
  if (state.isExam) return "Read the note on the staff";
  // A key still physically down cannot answer the score again — it has to be released
  // and struck, so say that rather than leaving the player wondering why nothing happens.
  const held = remaining.filter(note => state.heldMidiNotes.has(noteToMidi(note)));
  if (held.length) return `Release ${held.map(friendlyNote).join(" and ")} and play it again`;
  if (state.stepPressed.length) return `Now add ${remaining.map(friendlyNote).join(" and ")}`;
  if (step.length > 1) return `Play ${step.map(friendlyNote).join(" + ")} together`;
  return `Play ${friendlyNote(step[0])}`;
}

function handleNote(note, keyElement) {
  if (state.demoPlaying) return;
  if (state.performanceMode) {
    handleFullSongNote(note, keyElement);
    return;
  }
  if (state.noteIndex >= state.sequence.length) return;
  const step = stepNotes(state.noteIndex);

  // Already counted for this step: a nudge, not a mistake, so it costs no accuracy.
  if (state.stepPressed.includes(note)) {
    const remaining = step.filter(item => !state.stepPressed.includes(item));
    setFeedback("ALREADY DOWN", `${friendlyNote(note)} is counted — now add ${remaining.map(friendlyNote).join(" and ")}`, "neutral");
    return;
  }

  state.attempts += 1;

  if (!step.includes(note)) {
    logStepTrouble(state.noteIndex);
    setFeedback("TRY AGAIN", `That was ${friendlyNote(note)}. Find ${step.map(friendlyNote).join(" + ")}.`, "wrong");
    keyElement?.classList.add("is-wrong");
    document.querySelectorAll(`[data-staff-index="${state.noteIndex}"]`).forEach(element => element.classList.add("is-wrong"));
    setTimeout(() => keyElement?.classList.remove("is-wrong"), 380);
    return;
  }

  // Within a step the order does not matter; every note has to be struck.
  state.correct += 1;
  state.stepPressed.push(note);
  if (state.stepPressed.length < step.length) {
    const remaining = step.filter(item => !state.stepPressed.includes(item));
    setFeedback("KEEP GOING", `${friendlyNote(note)} — now add ${remaining.map(friendlyNote).join(" and ")}`, "correct");
    updatePracticeUI();
    return;
  }

  state.stepPressed = [];
  state.noteIndex += 1;
  const accuracy = Math.round((state.correct / state.attempts) * 100);
  if (state.noteIndex === state.sequence.length) {
    updatePracticeUI();
    if (state.activeLessonIndex !== null) finishLessonRun(accuracy);
    else {
      const hint = troubleSpotHint();
      setFeedback("PRACTICE COMPLETE", hint || (accuracy >= 90 ? "Beautifully played!" : "Nice work — repeat it to improve your accuracy"), "correct");
      document.querySelector("#next-note-hint").textContent = "Phrase complete";
      localStorage.setItem("lentoLastAccuracy", String(accuracy));
      if (accuracy >= 90) setTimeout(() => playCelebration(), 180);
    }
  } else {
    setFeedback("CORRECT", `${friendlyNote(note)} — keep going`, "correct");
    updatePracticeUI();
  }
}

// Mirrors gangQin's cursorWrongNoteCount: how often each position in the phrase is
// fluffed, kept across sessions so the staff can point at the spot that needs work.
function practiceKey() {
  if (state.activeLessonIndex !== null) return `lesson:${state.activeLessonIndex}`;
  if (state.activeSong) return `${state.performanceMode ? "fullsong" : "song"}:${state.activeSong.id}`;
  return "";
}

function readAllTrouble() {
  try {
    const saved = JSON.parse(localStorage.getItem("pianoDinoNoteTrouble") || "{}");
    return saved && typeof saved === "object" ? saved : {};
  } catch {
    return {};
  }
}

function readNoteTrouble() {
  const key = practiceKey();
  return key ? readAllTrouble()[key] || {} : {};
}

function logStepTrouble(index) {
  const key = practiceKey();
  if (!key) return;
  const all = readAllTrouble();
  const counts = all[key] || {};
  counts[index] = (counts[index] || 0) + 1;
  all[key] = counts;
  state.trouble = counts;
  try {
    localStorage.setItem("pianoDinoNoteTrouble", JSON.stringify(all));
  } catch {}
}

function troubleLabel(index) {
  if (state.performanceMode) {
    const event = state.performance?.events[index];
    return event ? friendlyNote(event.note) : "";
  }
  return stepNotes(index).map(friendlyNote).join(" + ");
}

function troubleSpotHint() {
  const worst = Object.entries(state.trouble)
    .filter(([, count]) => count >= TROUBLE_HINT_THRESHOLD)
    .sort((a, b) => b[1] - a[1])[0];
  if (!worst) return "";
  const label = troubleLabel(Number(worst[0]));
  return label ? `${label} at position ${Number(worst[0]) + 1} trips you up most — ${worst[1]} misses so far` : "";
}

function finishLessonRun(accuracy) {
  const lessonIndex = state.activeLessonIndex;
  const lesson = lessons[lessonIndex];
  if (!lesson) return;
  const levelItems = lessons.map((item, index) => ({ lesson: item, index })).filter(item => item.lesson.level === lesson.level);
  const unfinishedLevelLessons = levelItems.filter(item => item.lesson.kind !== "exam" && !state.completedLessons.has(item.index));
  const isPerfectSkipAttempt = lesson.kind === "exam" && unfinishedLevelLessons.length > 0;
  const requiredScore = isPerfectSkipAttempt ? 100 : (lesson.passScore || 80);
  const passed = lesson.kind !== "exam" || accuracy >= requiredScore;

  if (!passed) {
    const message = isPerfectSkipAttempt
      ? `${accuracy}% · a flawless 100% is required to skip this level`
      : `${accuracy}% · score at least ${requiredScore}% to unlock the next level`;
    setFeedback(isPerfectSkipAttempt ? "PERFECT SCORE REQUIRED" : "EXAM NOT PASSED", message, "wrong");
    document.querySelector("#next-note-hint").textContent = "Restart the exam and try again";
    return;
  }

  if (isPerfectSkipAttempt) levelItems.forEach(item => state.completedLessons.add(item.index));
  else state.completedLessons.add(lessonIndex);
  saveLessonProgress();
  renderLessons();
  const nextIndex = isPerfectSkipAttempt ? Math.max(...levelItems.map(item => item.index)) + 1 : lessonIndex + 1;
  const nextLesson = lessons[nextIndex];
  if (!nextLesson) {
    setFeedback("COURSE COMPLETE", `Excellent work · final accuracy ${accuracy}%`, "correct");
    document.querySelector("#next-note-hint").textContent = "Level one complete";
    setTimeout(() => playCelebration(), 180);
    return;
  }

  const label = isPerfectSkipAttempt ? "LEVEL SKIPPED" : lesson.kind === "exam" ? "EXAM PASSED" : "LESSON COMPLETE";
  const resultCopy = isPerfectSkipAttempt ? `Perfect 100% · ${nextLesson.title} is now unlocked` : `${accuracy}% · Next: ${nextLesson.title}`;
  setFeedback(label, resultCopy, "correct");
  document.querySelector("#next-note-hint").textContent = `Opening ${nextLesson.title}…`;
  if (lesson.kind === "exam" || accuracy >= 90) setTimeout(() => playCelebration(), 140);
  state.autoAdvanceTimer = setTimeout(() => {
    state.autoAdvanceTimer = null;
    startLesson(nextLesson, nextIndex);
  }, 1500);
}

function setFeedback(label, text, type) {
  const panel = document.querySelector("#feedback-panel");
  panel.classList.toggle("is-correct", type === "correct");
  panel.classList.toggle("is-wrong", type === "wrong");
  document.querySelector("#feedback-label").textContent = label;
  document.querySelector("#feedback-text").textContent = text;
}

function friendlyNote(note) {
  const names = { C: "C", D: "D", E: "E", F: "F", G: "G", A: "A", B: "B" };
  return `${names[note[0]]}${note.includes("#") ? " sharp" : ""}`;
}

function noteToMidi(note) {
  const pitchClass = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
  const match = note.match(/^([A-G])(#?)(\d)$/);
  return (Number(match[3]) + 1) * 12 + pitchClass[match[1]] + (match[2] ? 1 : 0);
}

function midiToNote(midi) {
  const names = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
  return `${names[midi % 12]}${Math.floor(midi / 12) - 1}`;
}

function playTone(note, duration = .34) {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  state.audioContext ||= new AudioContext();
  if (state.audioContext.state === "suspended") state.audioContext.resume();
  const now = state.audioContext.currentTime;
  const fundamental = 440 * Math.pow(2, (noteToMidi(note) - 69) / 12);
  const gain = state.audioContext.createGain();
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.17, now + .015);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
  gain.connect(state.audioContext.destination);
  [1, 2, 3].forEach((harmonic, index) => {
    const oscillator = state.audioContext.createOscillator();
    const partialGain = state.audioContext.createGain();
    oscillator.type = index === 0 ? "triangle" : "sine";
    oscillator.frequency.value = fundamental * harmonic;
    partialGain.gain.value = [1, .23, .08][index];
    oscillator.connect(partialGain).connect(gain);
    oscillator.start(now);
    oscillator.stop(now + duration + .04);
  });
}

function playCelebration() {
  ["C5", "E5", "G5", "C6"].forEach((note, index) => setTimeout(() => playTone(note, .55), index * 115));
}

document.addEventListener("keydown", event => {
  if (state.view !== "player" || event.repeat || /INPUT/.test(event.target.tagName)) return;
  const note = keyboardMap[event.key.toLowerCase()];
  if (!note) return;
  const key = document.querySelector(`[data-note="${note}"]`);
  key?.classList.add("is-pressed");
  playTone(note);
  handleNote(note, key);
});
document.addEventListener("keyup", event => {
  const note = keyboardMap[event.key.toLowerCase()];
  if (note) document.querySelector(`[data-note="${note}"]`)?.classList.remove("is-pressed");
});

document.querySelector("#listen-demo").addEventListener("click", async () => {
  if (state.sequence.length > 18) return toast("Demo is limited to the current phrase");
  stopDemo();
  const demoButton = document.querySelector("#listen-demo");
  demoButton.disabled = true;
  state.demoPlaying = true;
  setInputModeStatus("Listening only · this demo cannot complete the lesson");
  state.sequence.forEach((step, index) => {
    step.forEach(note => state.demoTimers.push(setTimeout(() => playTone(note, .48), index * 390)));
  });
  state.demoTimers.push(setTimeout(() => {
    state.demoPlaying = false;
    state.demoTimers = [];
    demoButton.disabled = false;
    setInputModeStatus(state.inputMode === "microphone" ? "Real piano microphone ready" : state.inputMode === "midi" ? "MIDI piano ready" : "Touch the glowing piano key");
  }, state.sequence.length * 390 + 200));
});

function stopDemo() {
  state.demoTimers.forEach(timer => clearTimeout(timer));
  state.demoTimers = [];
  state.demoPlaying = false;
  const demoButton = document.querySelector("#listen-demo");
  if (demoButton) demoButton.disabled = false;
}

async function activateInputMode(mode) {
  state.inputMode = mode;
  localStorage.setItem("pianoSproutsInputMode", mode);
  state.heldMidiNotes.clear();
  stopMicrophone();
  if (mode === "microphone") await startMicrophone();
  else if (mode === "midi") await startMidi();
  else setInputModeStatus("Touch the glowing piano key");
}

function setInputModeStatus(message) {
  const status = document.querySelector("#input-mode-status");
  if (status) status.textContent = message;
}

async function startMidi() {
  if (!navigator.requestMIDIAccess) {
    setInputModeStatus("MIDI is unavailable here");
    return toast("Try Chrome or Edge for Web MIDI support");
  }
  try {
    const access = await navigator.requestMIDIAccess();
    const inputs = [...access.inputs.values()];
    if (!inputs.length) {
      setInputModeStatus("No MIDI piano connected");
      return toast("Connect a USB or Bluetooth MIDI piano first");
    }
    inputs.forEach(input => input.onmidimessage = event => {
      const [status, midi, velocity] = event.data;
      const command = status & 0xf0;
      // A key that is already down cannot answer the score a second time: it must be
      // released and struck again. Without tracking note-off there is no way to tell a
      // held key from a re-struck one, and repeated notes read as a single press.
      if (command === 0x80 || (command === 0x90 && velocity === 0)) {
        state.heldMidiNotes.delete(midi);
        const key = document.querySelector(`[data-note="${midiToNote(midi)}"]`);
        key?.classList.remove("is-pressed");
        if (!state.performanceMode) updatePracticeUI();
        return;
      }
      if (command !== 0x90 || state.heldMidiNotes.has(midi)) return;
      state.heldMidiNotes.add(midi);
      const note = midiToNote(midi);
      const key = document.querySelector(`[data-note="${note}"]`);
      key?.classList.add("is-pressed");
      handleNote(note, key);
    });
    setInputModeStatus(`MIDI connected · ${inputs[0].name || "piano"}`);
    toast("MIDI piano connected");
  } catch (error) {
    setInputModeStatus("MIDI permission was not granted");
    toast("MIDI permission is needed");
  }
}

const MIC_MIN_FREQUENCY = 220;
const MIC_MAX_FREQUENCY = 620;
const MIC_HIGHPASS_HZ = 180;
const MIC_LOWPASS_HZ = 1900;
const MIC_SILENCE_LEVEL = .016;
const MIC_NOTE_LEVEL = .026;
const MIC_MIN_CLARITY = .74;
const MIC_MAX_CENTS_OFF = 45;
const MIC_STRICT_CLARITY = .86;
const MIC_STRICT_CENTS_OFF = 28;
const MIC_STRICT_CONFIRM_FRAMES = 5;
const MIC_OCTAVE_PREFERENCE = .86;
const MIC_ANALYSIS_INTERVAL_MS = 32;
const MIC_ATTACK_WINDOW_MS = 700;
const MIC_CONFIRM_FRAMES = 3;
const MIC_REPEAT_GUARD_MS = 170;

async function startMicrophone() {
  stopMicrophone();
  if (window.webkit?.messageHandlers?.nativeMicrophone) {
    if (!localStorage.getItem("pianoDinoNativeCalibrationV3")) return startNativeCalibration();
    window.webkit.messageHandlers.nativeMicrophone.postMessage("start");
    setInputModeStatus("Real piano microphone ready");
    toast("Native piano listening is ready");
    return;
  }
  if (!navigator.mediaDevices?.getUserMedia) {
    setInputModeStatus("Microphone listening is unavailable here");
    return toast("Microphone listening is not available");
  }
  try {
    state.micStream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: false } });
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    state.audioContext ||= new AudioContext();
    if (state.audioContext.state === "suspended") await state.audioContext.resume();
    const source = state.audioContext.createMediaStreamSource(state.micStream);
    const highpass = state.audioContext.createBiquadFilter();
    highpass.type = "highpass";
    highpass.frequency.value = MIC_HIGHPASS_HZ;
    highpass.Q.value = .7;
    const lowpass = state.audioContext.createBiquadFilter();
    lowpass.type = "lowpass";
    lowpass.frequency.value = MIC_LOWPASS_HZ;
    lowpass.Q.value = .7;
    const analyser = state.audioContext.createAnalyser();
    analyser.fftSize = 4096;
    analyser.smoothingTimeConstant = .12;
    source.connect(highpass).connect(lowpass).connect(analyser);
    const buffer = new Float32Array(analyser.fftSize);
    const spectrum = new Float32Array(analyser.frequencyBinCount);
    setInputModeStatus("Real piano microphone ready");
    const detect = () => {
      if (!state.micStream) return;
      state.micFrame = requestAnimationFrame(detect);
      if (state.inputMode !== "microphone" || state.view !== "player") return;
      const now = performance.now();
      if (now - state.micLastAnalysisAt < MIC_ANALYSIS_INTERVAL_MS) return;
      state.micLastAnalysisAt = now;
      analyser.getFloatTimeDomainData(buffer);
      const pitch = analyzePitch(buffer, state.audioContext.sampleRate);

      // micLevel trails whatever is already sounding, so a strike is a rise above the
      // decaying tail rather than above silence. That is what lets a repeated note
      // (lesson 3 plays C4 C4 G4 G4) register without a gap of silence between strikes.
      const soundingLevel = state.micLevel;
      state.micLevel += (pitch.rms - soundingLevel) * .3;
      if (pitch.rms > MIC_NOTE_LEVEL && pitch.rms > soundingLevel * 1.35 + .004) {
        // Only a strike arriving after the previous window closed starts a new note;
        // further loud frames of the same strike just hold the window open.
        if (now > state.micAttackUntil) {
          state.micCandidate = null;
          state.micCandidateFrames = 0;
        }
        state.micAttackUntil = now + MIC_ATTACK_WINDOW_MS;
      }
      if (pitch.rms < MIC_SILENCE_LEVEL) {
        state.micCandidate = null;
        state.micCandidateFrames = 0;
      }
      if (now > state.micAttackUntil || now - state.lastMicAt < MIC_REPEAT_GUARD_MS) return;
      if (!pitch.frequency || pitch.clarity < MIC_MIN_CLARITY) return;

      const midi = Math.round(69 + 12 * Math.log2(pitch.frequency / 440));
      const note = midiToNote(midi);
      if (!pianoNotes.includes(note)) return;
      // Report the note that was actually played, not just the one the score wants, so a
      // wrong key gets the same feedback here as it does on touch and MIDI. An unexpected
      // note has to be heard clearly before it counts as a mistake, so that room noise
      // landing on a piano pitch cannot cost the player their accuracy.
      const isExpected = expectedMicNotes().includes(note);
      const exactFrequency = 440 * Math.pow(2, (midi - 69) / 12);
      const cents = 1200 * Math.log2(pitch.frequency / exactFrequency);
      if (Math.abs(cents) > (isExpected ? MIC_MAX_CENTS_OFF : MIC_STRICT_CENTS_OFF)) return;
      if (!isExpected && pitch.clarity < MIC_STRICT_CLARITY) return;
      analyser.getFloatFrequencyData(spectrum);
      if (!hasPianoHarmonics(pitch.frequency, spectrum, state.audioContext.sampleRate, analyser.fftSize)) return;

      if (state.micCandidate === note) state.micCandidateFrames += 1;
      else {
        state.micCandidate = note;
        state.micCandidateFrames = 1;
      }
      if (state.micCandidateFrames < (isExpected ? MIC_CONFIRM_FRAMES : MIC_STRICT_CONFIRM_FRAMES)) return;

      state.micAttackUntil = 0;
      state.micCandidate = null;
      state.micCandidateFrames = 0;
      state.lastMicNote = note;
      state.lastMicAt = now;
      handleNote(note, document.querySelector(`[data-note="${note}"]`));
    };
    detect();
    toast("Real piano listening is ready");
  } catch (error) {
    setInputModeStatus("Allow microphone access to use your real piano");
    toast("Microphone permission is needed");
  }
}

const calibrationNotes = ["C4", "D4", "E4", "F4", "G4", "A4", "B4"];
let calibrationIndex = 0;
function startNativeCalibration() {
  calibrationIndex = 0;
  document.querySelector("#calibration-modal").hidden = false;
  document.querySelector("#calibration-note-row").innerHTML = calibrationNotes.map(note => `<span>${note[0]}</span>`).join("");
  prepareCalibrationNote();
}
function prepareCalibrationNote() {
  const note = calibrationNotes[calibrationIndex];
  document.querySelector("#calibration-note").textContent = note[0];
  document.querySelector("#calibration-status").textContent = `Ready for ${note[0]}`;
  document.querySelector(".calibration-listening").classList.remove("is-active");
  const capture = document.querySelector("#calibration-capture");
  capture.textContent = `Listen for ${note[0]}`;
  capture.disabled = false;
  [...document.querySelector("#calibration-note-row").children].forEach((item, index) => {
    item.classList.toggle("is-current", index === calibrationIndex);
    item.classList.toggle("is-done", index < calibrationIndex);
  });
}
document.querySelector("#calibration-capture")?.addEventListener("click", () => {
  const note = calibrationNotes[calibrationIndex];
  const captureIndex = calibrationIndex;
  const capture = document.querySelector("#calibration-capture");
  capture.disabled = true;
  document.querySelector("#calibration-status").textContent = `Listening—play ${note[0]} now`;
  document.querySelector(".calibration-listening").classList.add("is-active");
  window.webkit.messageHandlers.nativeMicrophone.postMessage(`calibrate:${note}`);
  setTimeout(() => {
    if (captureIndex === calibrationIndex && capture.disabled && !document.querySelector("#calibration-modal").hidden) {
      capture.disabled = false;
      capture.textContent = `Try ${note[0]} again`;
      document.querySelector("#calibration-status").textContent = "No piano key heard";
      document.querySelector(".calibration-listening").classList.remove("is-active");
      window.webkit.messageHandlers.nativeMicrophone.postMessage("cancelCapture");
    }
  }, 2400);
});
window.handleNativeCalibration = note => {
  if (note !== calibrationNotes[calibrationIndex]) return;
  calibrationIndex += 1;
  if (calibrationIndex < calibrationNotes.length) return setTimeout(prepareCalibrationNote, 350);
  localStorage.setItem("pianoDinoNativeCalibrationV3", "1");
  window.webkit.messageHandlers.nativeMicrophone.postMessage("finishCalibration");
  document.querySelector("#calibration-status").textContent = "Your piano is calibrated!";
  setTimeout(() => { document.querySelector("#calibration-modal").hidden = true; }, 700);
};
document.querySelector("#calibration-cancel")?.addEventListener("click", () => {
  window.webkit?.messageHandlers?.nativeMicrophone?.postMessage("stop");
  document.querySelector("#calibration-modal").hidden = true;
  state.inputMode = "screen";
  setInputModeStatus("Touch the glowing piano key");
});

function expectedMicNotes() {
  if (state.demoPlaying) return [];
  if (!state.performanceMode) return stepNotes(state.noteIndex).filter(note => !state.stepPressed.includes(note));
  if (!state.performance || state.performance.status !== "playing") return [];
  const elapsed = performance.now() - state.performance.startAt;
  return state.performance.events
    .filter(event => event.status === "pending" && Math.abs(event.time - elapsed) <= state.performance.hitWindowMs)
    .map(event => event.note);
}

function stopMicrophone() {
  window.webkit?.messageHandlers?.nativeMicrophone?.postMessage("stop");
  if (state.micFrame) cancelAnimationFrame(state.micFrame);
  state.micFrame = null;
  state.micStream?.getTracks().forEach(track => track.stop());
  state.micStream = null;
  state.lastMicNote = null;
  state.lastMicAt = 0;
  state.micLevel = 0;
  state.micAttackUntil = 0;
  state.micCandidate = null;
  state.micCandidateFrames = 0;
  state.micLastAnalysisAt = 0;
}

window.handleNativePianoNote = note => {
  if (state.inputMode !== "microphone" || state.view !== "player") return;
  if (!pianoNotes.includes(note)) return;
  handleNote(note, document.querySelector(`[data-note="${note}"]`));
};

function analyzePitch(buffer, sampleRate) {
  let rms = 0;
  for (let i = 0; i < buffer.length; i++) rms += buffer[i] * buffer[i];
  rms = Math.sqrt(rms / buffer.length);
  if (rms < MIC_SILENCE_LEVEL) return { frequency: null, clarity: 0, rms };
  const minLag = Math.floor(sampleRate / MIC_MAX_FREQUENCY);
  const maxLag = Math.ceil(sampleRate / MIC_MIN_FREQUENCY);
  const length = Math.min(buffer.length - maxLag, 2300);
  const scores = new Float32Array(maxLag + 2);
  let bestLag = -1;
  let bestScore = 0;
  for (let lag = minLag; lag <= maxLag; lag++) {
    let cross = 0;
    let energyA = 0;
    let energyB = 0;
    for (let index = 0; index < length; index++) {
      const a = buffer[index];
      const b = buffer[index + lag];
      cross += a * b;
      energyA += a * a;
      energyB += b * b;
    }
    const score = cross / Math.sqrt(energyA * energyB || 1);
    scores[lag] = score;
    if (score > bestScore) {
      bestScore = score;
      bestLag = lag;
    }
  }
  if (bestLag < 0 || bestScore < MIC_MIN_CLARITY) return { frequency: null, clarity: bestScore, rms };
  // A piano tone correlates nearly as well at twice its period, so the strongest peak
  // is often an octave below the key actually played — A4 through C5 all have their
  // sub-octave inside this search range. Prefer the earliest peak that is nearly as
  // strong, which is the true fundamental.
  for (let lag = minLag + 1; lag < bestLag; lag++) {
    const score = scores[lag];
    if (score < MIC_MIN_CLARITY || score < bestScore * MIC_OCTAVE_PREFERENCE) continue;
    if (score > scores[lag - 1] && score >= scores[lag + 1]) {
      bestLag = lag;
      break;
    }
  }
  const center = scores[bestLag];
  const left = bestLag > minLag ? scores[bestLag - 1] : center;
  const right = bestLag < maxLag ? scores[bestLag + 1] : center;
  const denominator = 2 * (left - 2 * center + right);
  const adjustment = denominator ? (left - right) / denominator : 0;
  return { frequency: sampleRate / (bestLag + adjustment), clarity: center, rms };
}

function hasPianoHarmonics(frequency, spectrum, sampleRate, fftSize) {
  const binWidth = sampleRate / fftSize;
  const peakAt = target => {
    const center = Math.round(target / binWidth);
    let peak = -160;
    for (let offset = -2; offset <= 2; offset++) peak = Math.max(peak, spectrum[center + offset] ?? -160);
    return peak;
  };
  const fundamental = peakAt(frequency);
  const harmonicPeak = Math.max(peakAt(frequency * 2), peakAt(frequency * 3));
  const levels = [];
  const firstBin = Math.floor(MIC_HIGHPASS_HZ / binWidth);
  const lastBin = Math.min(spectrum.length - 1, Math.ceil(MIC_LOWPASS_HZ / binWidth));
  for (let bin = firstBin; bin <= lastBin; bin += 5) if (Number.isFinite(spectrum[bin])) levels.push(spectrum[bin]);
  if (!levels.length) return false;
  // Median, not mean: the note's own partials drag a mean upward, so a loud clean note
  // could look like it never rose above the room it was played in.
  levels.sort((a, b) => a - b);
  const noiseFloor = levels[levels.length >> 1];
  return Math.max(fundamental, harmonicPeak) > noiseFloor + 12 && harmonicPeak > fundamental - 30;
}

let toastTimer;
function toast(message) {
  const element = document.querySelector("#toast");
  element.textContent = message;
  element.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => element.classList.remove("is-visible"), 2400);
}

window.addEventListener("resize", () => requestAnimationFrame(positionFallingNotes));

let installPrompt;
const installButton = document.querySelector("#install-app");
const iosInstallModal = document.querySelector("#ios-install-modal");
const isAppleMobile = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
const isStandalone = window.matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;

if (isAppleMobile) document.documentElement.classList.add("is-apple-mobile");

window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault();
  installPrompt = event;
  installButton?.classList.remove("is-installed");
});

installButton?.addEventListener("click", async () => {
  if (installPrompt) {
    installPrompt.prompt();
    const choice = await installPrompt.userChoice;
    installPrompt = null;
    if (choice.outcome === "accepted") installButton.classList.add("is-installed");
    return;
  }
  if (isStandalone) {
    toast("Piano Dino is already installed");
  } else if (isAppleMobile) {
    iosInstallModal.hidden = false;
  } else {
    toast("Open the browser menu, then tap Install app or Add page to Home screen");
  }
});

window.addEventListener("appinstalled", () => {
  installPrompt = null;
  installButton?.classList.add("is-installed");
  toast("Piano Dino installed!");
});

document.querySelector("#ios-install-close")?.addEventListener("click", () => { iosInstallModal.hidden = true; });
iosInstallModal?.addEventListener("click", event => { if (event.target === iosInstallModal) iosInstallModal.hidden = true; });

if (isStandalone) installButton?.classList.add("is-installed");

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
}

renderSongs();
renderFullSongs();
renderLessons();
renderPiano();
