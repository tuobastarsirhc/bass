const notes = document.querySelectorAll(".note");
const openNotes = document.querySelectorAll(".open-note");
const noteName = document.querySelector(".note-name");
const image = document.querySelector("img");
const closeBtn = document.querySelector(".close-btn");
const modal = document.querySelector(".modal");
const dot = document.querySelector(".dot");

const noteNameClassesForNoteTextDisplay = ["E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B", "C", "C#/Db", "D", "D#/Eb"]

const noteNameClassesForStaffDisplay = ["e1", "f1", "f-sharp-1", "g1", "g-sharp-1", "a1", "a-sharp-1", "b1", "c2", "c-sharp-2", "d2", "d-sharp-2", "e2",
    "f2", "f-sharp-2", "g2", "g-sharp-2", "a2", "a-sharp-2", "b2", "c3", "c-sharp-3", "d3", "d-sharp-3", "e3", "f3", "f-sharp-3", "g3"]

const uniqueNoteNameClassesForDotDisplay = [
    "e-string-low-e",
    "e-string-f",
    "e-string-f-sharp",
    "e-string-g",
    "e-string-g-sharp",
    "e-string-a",
    "e-string-a-sharp",
    "e-string-b",
    "e-string-c",
    "e-string-c-sharp",
    "e-string-d",
    "e-string-d-sharp",
    "e-string-high-e",
    "a-string-low-a",
    "a-string-a-sharp",
    "a-string-b",
    "a-string-c",
    "a-string-c-sharp",
    "a-string-d",
    "a-string-d-sharp",
    "a-string-e",
    "a-string-f",
    "a-string-f-sharp",
    "a-string-g",
    "a-string-g-sharp",
    "a-string-high-a",
    "d-string-low-d",
    "d-string-d-sharp",
    "d-string-e",
    "d-string-f",
    "d-string-f-sharp",
    "d-string-g",
    "d-string-g-sharp",
    "d-string-a",
    "d-string-a-sharp",
    "d-string-b",
    "d-string-c",
    "d-string-c-sharp",
    "d-string-high-d",
    "g-string-low-g",
    "g-string-g-sharp",
    "g-string-a",
    "g-string-a-sharp",
    "g-string-b",
    "g-string-c",
    "g-string-c-sharp",
    "g-string-d",
    "g-string-d-sharp",
    "g-string-e",
    "g-string-f",
    "g-string-f-sharp",
    "g-string-high-g"
]

closeBtn.addEventListener('click', function () {
    modal.classList.add("hidden");
})

for (let note of notes) {
    note.addEventListener('click', function (e) {
        playNote(note);
        changeNoteName(e);
        changePicture(e);
        showDot(e);

    })
}

function playNote(note) {
    const noteAudio = document.getElementById(note.dataset.note);
    noteAudio.currentTime = 0;
    noteAudio.play();
    note.classList.add('active');
    noteAudio.addEventListener('ended', function () {
        note.classList.remove('active');
    })
}

for (let openNote of openNotes) {
    openNote.addEventListener('click', function (e) {
        playOpenNote(openNote);
        changeNoteName(e);
        changePicture(e);
        showDot(e);
    })
}

function playOpenNote(openNote) {
    const openNoteAudio = document.getElementById(openNote.dataset.note);
    openNoteAudio.currentTime = 0;
    openNoteAudio.play();
    openNote.classList.add('active');
    openNoteAudio.addEventListener('ended', function () {
        openNote.classList.remove('active');
    })
}

function changePicture(e) {
    let clickedNoteName = e.target.classList;

    for (let i = 0; i < noteNameClassesForStaffDisplay.length; i++) {
        if (clickedNoteName.contains(noteNameClassesForStaffDisplay[i])) {
            image.setAttribute('src', `images/${noteNameClassesForStaffDisplay[i]}.png`)
        }
    }
}

function changeNoteName(e) {
    for (let i = 0; i < noteNameClassesForNoteTextDisplay.length; i++) {
        let clickedNoteName = e.target.classList;

        if (clickedNoteName.contains(noteNameClassesForNoteTextDisplay[i])) {
            noteName.innerHTML = noteNameClassesForNoteTextDisplay[i];
        }
    }
}


function showDot(e) {
    let clickedNoteName = e.target.classList;
    for (let i = 0; i < uniqueNoteNameClassesForDotDisplay.length; i++) {
        if (clickedNoteName.contains(uniqueNoteNameClassesForDotDisplay[i])) {
            let noteOfDot = document.querySelector(`.${uniqueNoteNameClassesForDotDisplay[i]}-dot`);
            noteOfDot.style.visibility = "visible"
            setTimeout(() => {
                noteOfDot.style.visibility = "hidden"
            }, 400)
        }

    }
}
