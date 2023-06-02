
const notes = document.querySelectorAll(".note");
const openNotes = document.querySelectorAll(".open-note");
const noteName = document.querySelector(".note-name");
const image = document.querySelector("img");
const closeBtn = document.querySelector(".close-btn");
const modal = document.querySelector(".modal");
const dot = document.querySelector(".dot");
const cMajorScaleBtn = document.querySelector(".c-major-scale");
const dMajorScaleBtn = document.querySelector(".d-major-scale");
const eMajorScaleBtn = document.querySelector(".e-major-scale");


const noteNameClassesForNoteTextDisplay = ["E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B", "C", "C#/Db", "D", "D#/Eb"]

const noteNameClassesForStaffDisplay = ["e1", "f1", "f-sharp-1", "g1", "g-sharp-1", "a1", "a-sharp-1", "b1", "c2", "c-sharp-2", "d2", "d-sharp-2", "e2",
    "f2", "f-sharp-2", "g2", "g-sharp-2", "a2", "a-sharp-2", "b2", "c3", "c-sharp-3", "d3", "d-sharp-3", "e3", "f3", "f-sharp-3", "g3"]

cMajorScaleBtn.addEventListener('click', function () {
    let root = document.getElementById("c2");
    root.play();
    setTimeout(() => {
        let second = document.getElementById("d2");
        second.play();
    }, 1000)
    setTimeout(() => {
        let third = document.getElementById("e2");
        third.play();
    }, 2000)
    setTimeout(() => {
        let fourth = document.getElementById("f2");
        fourth.play();
    }, 3000)
    setTimeout(() => {
        let fifth = document.getElementById("g2");
        fifth.play();
    }, 4000)
    setTimeout(() => {
        let fourth = document.getElementById("f2");
        fourth.play();
    }, 5000)
    setTimeout(() => {
        let third = document.getElementById("e2");
        third.play();
    }, 6000)
    setTimeout(() => {
        let second = document.getElementById("d2");
        second.play();
    }, 7000)
    setTimeout(() => {
        let root = document.getElementById("c2");
        root.play();
    }, 8000)
})

eMajorScaleBtn.addEventListener('click', function () {
    let startingNoteIndex;
    for (let i = 0; i < noteNameClassesForStaffDisplay.length; i++) {
        if (noteNameClassesForStaffDisplay[i] == "e2")
            startingNoteIndex = i;

    }


    
        for (let i = 0; i < 8; i++) {
            setTimeout(() => {
                let startingDotIndex = 20;
                let noteOfDot = document.querySelector(`.${uniqueNoteNameClassesForDotDisplay[startingDotIndex]}-dot`);
                noteName.innerHTML = noteNameClassesForNoteTextDisplay[0]
                image.setAttribute('src', `images/${noteNameClassesForStaffDisplay[startingNoteIndex]}.png`)
                noteOfDot.style.visibility = "visible"
                setTimeout(() => {
                    noteOfDot.style.visibility = "hidden"
                }, 1000)
                let root = document.getElementById(noteNameClassesForStaffDisplay[startingNoteIndex]);
                root.play();
                console.log(i++)
            }, 1000)
        }
   


})

dMajorScaleBtn.addEventListener('click', function () {
    // FIRST NOTE
    let startingNoteIndex = 10;
    let noteOfDot = document.querySelector(`.${uniqueNoteNameClassesForDotDisplay[18]}-dot`);
    noteName.innerHTML = "D"
    image.setAttribute('src', `images/${noteNameClassesForStaffDisplay[10]}.png`)
    noteOfDot.style.visibility = "visible"
    setTimeout(() => {
        noteOfDot.style.visibility = "hidden"
    }, 1000)
    let root = document.getElementById(noteNameClassesForStaffDisplay[startingNoteIndex]);
    root.play();

    //2ND NOTE
    setTimeout(() => {
        let noteOfDot2 = document.querySelector(`.${uniqueNoteNameClassesForDotDisplay[20]}-dot`);
        noteOfDot2.style.visibility = "visible"
        noteName.innerHTML = "E"
        image.setAttribute('src', `images/${noteNameClassesForStaffDisplay[12]}.png`)
        let second = document.getElementById(noteNameClassesForStaffDisplay[startingNoteIndex + 2]);
        second.play();
    }, 1300)
    setTimeout(() => {
        let noteOfDot2 = document.querySelector(`.${uniqueNoteNameClassesForDotDisplay[20]}-dot`);
        noteOfDot2.style.visibility = "hidden"
    }, 2300)

    //3RD NOTE
    setTimeout(() => {
        let noteOfDot3 = document.querySelector(`.${uniqueNoteNameClassesForDotDisplay[22]}-dot`);
        noteOfDot3.style.visibility = "visible"
        noteName.innerHTML = "F#"
        image.setAttribute('src', `images/${noteNameClassesForStaffDisplay[14]}.png`)
        let third = document.getElementById(noteNameClassesForStaffDisplay[startingNoteIndex + 4]);
        third.play();
    }, 3000)
    setTimeout(() => {
        let noteOfDot3 = document.querySelector(`.${uniqueNoteNameClassesForDotDisplay[22]}-dot`);
        noteOfDot3.style.visibility = "hidden"
    }, 4000)

    //4TH NOTE
    setTimeout(() => {
        let noteOfDot4 = document.querySelector(`.${uniqueNoteNameClassesForDotDisplay[31]}-dot`);
        noteOfDot4.style.visibility = "visible"
        noteName.innerHTML = "G"
        image.setAttribute('src', `images/${noteNameClassesForStaffDisplay[15]}.png`)
        let fourth = document.getElementById(noteNameClassesForStaffDisplay[startingNoteIndex + 5]);
        fourth.play();
    }, 5000)
    setTimeout(() => {
        let noteOfDot4 = document.querySelector(`.${uniqueNoteNameClassesForDotDisplay[31]}-dot`);
        noteOfDot4.style.visibility = "hidden"
    }, 6000)

    //5TH NOTE
    setTimeout(() => {
        let noteOfDot5 = document.querySelector(`.${uniqueNoteNameClassesForDotDisplay[33]}-dot`);
        noteOfDot5.style.visibility = "visible"
        noteName.innerHTML = "A"
        image.setAttribute('src', `images/${noteNameClassesForStaffDisplay[17]}.png`)
        let fourth = document.getElementById(noteNameClassesForStaffDisplay[startingNoteIndex + 7]);
        fourth.play();
    }, 7000)
    setTimeout(() => {
        let noteOfDot5 = document.querySelector(`.${uniqueNoteNameClassesForDotDisplay[33]}-dot`);
        noteOfDot5.style.visibility = "hidden"
    }, 8000)

    //6TH NOTE
    setTimeout(() => {
        let noteOfDot6 = document.querySelector(`.${uniqueNoteNameClassesForDotDisplay[35]}-dot`);
        noteOfDot6.style.visibility = "visible"
        noteName.innerHTML = "B"
        image.setAttribute('src', `images/${noteNameClassesForStaffDisplay[19]}.png`)
        let fourth = document.getElementById(noteNameClassesForStaffDisplay[startingNoteIndex + 9]);
        fourth.play();
    }, 9000)
    setTimeout(() => {
        let noteOfDot6 = document.querySelector(`.${uniqueNoteNameClassesForDotDisplay[35]}-dot`);
        noteOfDot6.style.visibility = "hidden"
    }, 10000)

    //7TH NOTE
    setTimeout(() => {
        let noteOfDot6 = document.querySelector(`.${uniqueNoteNameClassesForDotDisplay[45]}-dot`);
        noteOfDot6.style.visibility = "visible"
        noteName.innerHTML = "C#"
        image.setAttribute('src', `images/${noteNameClassesForStaffDisplay[21]}.png`)
        let fourth = document.getElementById(noteNameClassesForStaffDisplay[startingNoteIndex + 11]);
        fourth.play();
    }, 11000)
    setTimeout(() => {
        let noteOfDot6 = document.querySelector(`.${uniqueNoteNameClassesForDotDisplay[45]}-dot`);
        noteOfDot6.style.visibility = "hidden"
    }, 12000)

    //8TH NOTE
    setTimeout(() => {
        let noteOfDot6 = document.querySelector(`.${uniqueNoteNameClassesForDotDisplay[46]}-dot`);
        noteOfDot6.style.visibility = "visible"
        noteName.innerHTML = "D"
        image.setAttribute('src', `images/${noteNameClassesForStaffDisplay[22]}.png`)
        let fourth = document.getElementById(noteNameClassesForStaffDisplay[startingNoteIndex + 12]);
        fourth.play();
    }, 13000)
    setTimeout(() => {
        let noteOfDot6 = document.querySelector(`.${uniqueNoteNameClassesForDotDisplay[46]}-dot`);
        noteOfDot6.style.visibility = "hidden"
    }, 14000)
})



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
