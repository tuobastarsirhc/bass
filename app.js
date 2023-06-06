
const notes = document.querySelectorAll(".note");
const openNotes = document.querySelectorAll(".open-note");
const noteName = document.querySelector(".note-name");
const image = document.querySelector("img");
const closeBtn = document.querySelector(".close-btn");
const modal = document.querySelector(".modal");
const dot = document.querySelector(".dot");
const playMajorScaleBtn = document.querySelector(".play-major-scale-btn");
const playMinorScaleBtn = document.querySelector(".play-minor-scale-btn");

let isQuizMode = false;

//NOTE NAME CLASSES FOR NOTE TEXT DISPLAY
const noteNameClassesForNoteTextDisplay = ["E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B", "C", "C#/Db", "D", "D#/Eb"];

//NOTE NAME CLASSES FOR STAFF DISPLAY
const noteNameClassesForStaffDisplay = ["e1", "f1", "f-sharp-1", "g1", "g-sharp-1", "a1", "a-sharp-1", "b1", "c2", "c-sharp-2", "d2", "d-sharp-2", "e2",
    "f2", "f-sharp-2", "g2", "g-sharp-2", "a2", "a-sharp-2", "b2", "c3", "c-sharp-3", "d3", "d-sharp-3", "e3", "f3", "f-sharp-3", "g3"];


//UNIQUE NOTE NAME CLASSES FOR DOT DISPLAY
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
];

//MAJOR SCALE ARRAYS
const cMajorScaleArray = [
    "c2",
    "d2",
    "e2",
    "f2",
    "g2",
    "a2",
    "b2",
    "c3",
    "C",
    "D",
    "E",
    "F",
    "G",
    "A",
    "B",
    "C",
    "a-string-c",
    "a-string-d",
    "a-string-e",
    "d-string-f",
    "d-string-g",
    "d-string-a",
    "g-string-b",
    "g-string-c",
];

const cSharpMajorScaleArray = [
    "c-sharp-2",
    "d-sharp-2",
    "f2",
    "f-sharp-2",
    "g-sharp-2",
    "a-sharp-2",
    "c3",
    "c-sharp-3",
    "C#/Db",
    "D#/Eb",
    "E#/F",
    "F#/Gb",
    "G#/Ab",
    "A#/Bb",
    "B#/C",
    "C#/Db",
    "a-string-c-sharp",
    "a-string-d-sharp",
    "a-string-f",
    "d-string-f-sharp",
    "d-string-g-sharp",
    "d-string-a-sharp",
    "g-string-c",
    "g-string-c-sharp"
];

const dMajorScaleArray = [
    "d2",
    "e2",
    "f-sharp-2",
    "g2",
    "a2",
    "b2",
    "c-sharp-3",
    "d3",
    "D",
    "E",
    "F#",
    "G",
    "A",
    "B",
    "C#",
    "D",
    "a-string-d",
    "a-string-e",
    "a-string-f-sharp",
    "d-string-g",
    "d-string-a",
    "d-string-b",
    "g-string-c-sharp",
    "g-string-d"
];

const dSharpMajorScaleArray = [
    "d-sharp-2",
    "f2",
    "g2",
    "g-sharp-2",
    "a-sharp-2",
    "c3",
    "d3",
    "d-sharp-3",
    "D#/Eb",
    "E#/F",
    "Fx/G",
    "G#/Ab",
    "A#/Bb",
    "B#/C",
    "Cx/Db",
    "D#/Eb",
    "a-string-d-sharp",
    "a-string-f",
    "a-string-g",
    "d-string-g-sharp",
    "d-string-a-sharp",
    "d-string-c",
    "g-string-d",
    "g-string-d-sharp"
];

const eMajorScaleArray = [
    "e1",
    "f-sharp-1",
    "g-sharp-1",
    "a1",
    "b1",
    "c-sharp-2",
    "d-sharp-2",
    "e2",
    "E",
    "F#",
    "G#",
    "A",
    "B",
    "C#",
    "D",
    "E",
    "e-string-low-e",
    "e-string-f-sharp",
    "e-string-g-sharp",
    "a-string-low-a",
    "a-string-b",
    "a-string-c-sharp",
    "d-string-d-sharp",
    "d-string-e"
];

const fMajorScaleArray = [
    "f1",
    "g1",
    "a1",
    "a-sharp-1",
    "c2",
    "d2",
    "e2",
    "f2",
    "F",
    "G",
    "A",
    "Bb",
    "C",
    "D",
    "E",
    "F",
    "e-string-f",
    "e-string-g",
    "e-string-a",
    "a-string-a-sharp",
    "a-string-c",
    "a-string-d",
    "d-string-e",
    "d-string-f"
];

const fSharpMajorScaleArray = [
    "f-sharp-1",
    "g-sharp-1",
    "a-sharp-1",
    "b1",
    "c-sharp-2",
    "d-sharp-2",
    "f2",
    "f-sharp-2",
    "F#/Gb",
    "G#/Ab",
    "A#/Bb",
    "B/Cb",
    "C#/Db",
    "D#/Eb",
    "E#/F",
    "F#/Gb",
    "e-string-f-sharp",
    "e-string-g-sharp",
    "e-string-a-sharp",
    "a-string-b",
    "a-string-c-sharp",
    "a-string-d-sharp",
    "d-string-f",
    "d-string-f-sharp"
];

const gMajorScaleArray = [
    "g1",
    "a1",
    "b1",
    "c2",
    "d2",
    "e2",
    "f-sharp-2",
    "g2",
    "G",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F#",
    "G",
    "e-string-g",
    "e-string-a",
    "e-string-b",
    "a-string-c",
    "a-string-d",
    "a-string-e",
    "d-string-f-sharp",
    "d-string-g"
];

const gSharpMajorScaleArray = [
    "g-sharp-1",
    "a-sharp-1",
    "c2",
    "c-sharp-2",
    "d-sharp-2",
    "f2",
    "g2",
    "g-sharp-2",
    "G#/Ab",
    "A#/Bb",
    "B#/C",
    "C#/Db",
    "D#/Eb",
    "E#/F",
    "Fx/G",
    "G#/Ab",
    "e-string-g-sharp",
    "e-string-a-sharp",
    "e-string-c",
    "a-string-c-sharp",
    "a-string-d-sharp",
    "a-string-f",
    "d-string-g",
    "d-string-g-sharp"
];

const aMajorScaleArray = [
    "a1",
    "b1",
    "c-sharp-2",
    "d2",
    "e2",
    "f-sharp-2",
    "g-sharp-2",
    "a2",
    "A",
    "B",
    "C#",
    "D",
    "E",
    "F#",
    "G#",
    "A",
    "a-string-low-a",
    "a-string-b",
    "a-string-c-sharp",
    "d-string-low-d",
    "d-string-e",
    "d-string-f-sharp",
    "g-string-g-sharp",
    "g-string-a"
];

const aSharpMajorScaleArray = [
    "a-sharp-1",
    "c2",
    "d2",
    "d-sharp-2",
    "f2",
    "g2",
    "a2",
    "a-sharp-2",
    "A#/Bb",
    "B#/C",
    "Cx/D",
    "D#/Eb",
    "E#/F",
    "Fx/G",
    "Gx/A",
    "A#/Bb",
    "a-string-a-sharp",
    "a-string-c",
    "a-string-d",
    "d-string-d-sharp",
    "d-string-f",
    "d-string-g",
    "g-string-a",
    "g-string-a-sharp"
];

const bMajorScaleArray = [
    "b1",
    "c-sharp-2",
    "d-sharp-2",
    "e2",
    "f-sharp-2",
    "g-sharp-2",
    "a-sharp-2",
    "b2",
    "B",
    "C#",
    "D#",
    "E",
    "F#",
    "G#",
    "A#",
    "B",
    "a-string-b",
    "a-string-c-sharp",
    "a-string-d-sharp",
    "d-string-e",
    "d-string-f-sharp",
    "d-string-g-sharp",
    "g-string-a-sharp",
    "g-string-b"
];

//MINOR SCALE ARRAYS
const cMinorScaleArray = [
    "c2",
    "d2",
    "d-sharp-2",
    "f2",
    "g2",
    "g-sharp-2",
    "a-sharp-2",
    "c3",
    "C",
    "D",
    "Eb",
    "F",
    "G",
    "Ab",
    "Bb",
    "C",
    "a-string-c",
    "a-string-d",
    "a-string-d-sharp",
    "d-string-f",
    "d-string-g",
    "d-string-g-sharp",
    "g-string-a-sharp",
    "g-string-c",
];

const cSharpMinorScaleArray = [
    "c-sharp-2",
    "d-sharp-2",
    "e2",
    "f-sharp-2",
    "g-sharp-2",
    "a2",
    "b2",
    "c-sharp-3",
    "C#/Db",
    "D#/Eb",
    "E/Fb",
    "F#/Gb",
    "G#/Ab",
    "A/Bbb",
    "B/Cb",
    "C#/Db",
    "a-string-c-sharp",
    "a-string-d-sharp",
    "a-string-e",
    "d-string-f-sharp",
    "d-string-g-sharp",
    "d-string-a",
    "g-string-b",
    "g-string-c-sharp"
];

const dMinorScaleArray = [
    "d2",
    "e2",
    "f2",
    "g2",
    "a2",
    "a-sharp-2",
    "c3",
    "d3",
    "D",
    "E",
    "F",
    "G",
    "A",
    "Bb",
    "C",
    "D",
    "a-string-d",
    "a-string-e",
    "a-string-f",
    "d-string-g",
    "d-string-a",
    "d-string-a-sharp",
    "g-string-c",
    "g-string-d"
];

const dSharpMinorScaleArray = [
    "d-sharp-2",
    "f2",
    "f-sharp-2",
    "g-sharp-2",
    "a-sharp-2",
    "b2",
    "c-sharp-3",
    "d-sharp-3",
    "D#/Eb",
    "E#/F",
    "F#/Gb",
    "G#/Ab",
    "A#/Bb",
    "B/Cb",
    "C#/Db",
    "D#/Eb",
    "a-string-d-sharp",
    "a-string-f",
    "a-string-f-sharp",
    "d-string-g-sharp",
    "d-string-a-sharp",
    "d-string-b",
    "g-string-c-sharp",
    "g-string-d-sharp"
];

const eMinorScaleArray = [
    "e1",
    "f-sharp-1",
    "g1",
    "a1",
    "b1",
    "c2",
    "d2",
    "e2",
    "E",
    "F#",
    "G",
    "A",
    "B",
    "C",
    "D",
    "E",
    "e-string-low-e",
    "e-string-f-sharp",
    "e-string-g",
    "a-string-low-a",
    "a-string-b",
    "a-string-c",
    "d-string-low-d",
    "d-string-e"
];

const fMinorScaleArray = [
    "f1",
    "g1",
    "g-sharp-1",
    "a-sharp-1",
    "c2",
    "c-sharp-2",
    "d-sharp-2",
    "f2",
    "F",
    "G",
    "Ab",
    "Bb",
    "C",
    "Db",
    "Eb",
    "F",
    "e-string-f",
    "e-string-g",
    "e-string-g-sharp",
    "a-string-a-sharp",
    "a-string-c",
    "a-string-c-sharp",
    "d-string-d-sharp",
    "d-string-f"
];

const fSharpMinorScaleArray = [
    "f-sharp-1",
    "g-sharp-1",
    "a1",
    "b1",
    "c-sharp-2",
    "d2",
    "e2",
    "f-sharp-2",
    "F#/Gb",
    "G#/Ab",
    "A/Bbb",
    "B/Cb",
    "C#/Db",
    "D/Ebb",
    "E/Fb",
    "F#/Gb",
    "e-string-f-sharp",
    "e-string-g-sharp",
    "e-string-a",
    "a-string-b",
    "a-string-c-sharp",
    "a-string-d",
    "d-string-e",
    "d-string-f-sharp"
];

const gMinorScaleArray = [
    "g1",
    "a1",
    "a-sharp-1",
    "c2",
    "d2",
    "d-sharp-2",
    "f2",
    "g2",
    "G",
    "A",
    "Bb",
    "C",
    "D",
    "Eb",
    "F",
    "G",
    "e-string-g",
    "e-string-a",
    "e-string-a-sharp",
    "a-string-c",
    "a-string-d",
    "a-string-d-sharp",
    "d-string-f",
    "d-string-g"
];

const gSharpMinorScaleArray = [
    "g-sharp-1",
    "a-sharp-1",
    "b1",
    "c-sharp-2",
    "d-sharp-2",
    "e2",
    "f-sharp-2",
    "g-sharp-2",
    "G#/Ab",
    "A#/Bb",
    "B/Cb",
    "C#/Db",
    "D#/Eb",
    "E/Fb",
    "F#/Gb",
    "G#/Ab",
    "e-string-g-sharp",
    "e-string-a-sharp",
    "e-string-b",
    "a-string-c-sharp",
    "a-string-d-sharp",
    "a-string-e",
    "d-string-f-sharp",
    "d-string-g-sharp"
];

const aMinorScaleArray = [
    "a1",
    "b1",
    "c2",
    "d2",
    "e2",
    "f2",
    "g2",
    "a2",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "A",
    "a-string-low-a",
    "a-string-b",
    "a-string-c",
    "d-string-low-d",
    "d-string-e",
    "d-string-f",
    "g-string-low-g",
    "g-string-a"
];

const aSharpMinorScaleArray = [
    "a-sharp-1",
    "c2",
    "c-sharp-2",
    "d-sharp-2",
    "f2",
    "f-sharp-2",
    "g-sharp-2",
    "a-sharp-2",
    "A#/Bb",
    "B#/C",
    "C#/Db",
    "D#/Eb",
    "E#/F",
    "F#/Gb",
    "G#/Ab",
    "A#/Bb",
    "a-string-a-sharp",
    "a-string-c",
    "a-string-c-sharp",
    "d-string-d-sharp",
    "d-string-f",
    "d-string-f-sharp",
    "g-string-g-sharp",
    "g-string-a-sharp"
];

const bMinorScaleArray = [
    "b1",
    "c-sharp-2",
    "d2",
    "e2",
    "f-sharp-2",
    "g2",
    "a2",
    "b2",
    "B",
    "C#",
    "D",
    "E",
    "F#",
    "G",
    "A",
    "B",
    "a-string-b",
    "a-string-c-sharp",
    "a-string-d",
    "d-string-e",
    "d-string-f-sharp",
    "d-string-g",
    "g-string-a",
    "g-string-b"
];

//PROMISE TO SLOW DOWN FOR LOOP
const delay = (time) => {
    return new Promise(resolve => setTimeout(resolve, time))
}

//PLAY MAJOR SCALE BUTTON
playMajorScaleBtn.addEventListener('click', function () {
    let chosenMajorScale = document.getElementById("major-scales").value;

    switch (chosenMajorScale) {
        case "c":
            playCMajorScale();
            break;
        case "c-sharp":
            playCSharpMajorScale();
            break;
        case "d":
            playDMajorScale();
            break;
        case "d-sharp":
            playDSharpMajorScale();
            break;
        case "e":
            playEMajorScale();
            break;
        case "f":
            playFMajorScale();
            break;
        case "f-sharp":
            playFSharpMajorScale();
            break;
        case "g":
            playGMajorScale();
            break;
        case "g-sharp":
            playGSharpMajorScale();
            break;
        case "a":
            playAMajorScale();
            break;
        case "a-sharp":
            playASharpMajorScale();
            break;
        case "b":
            playBMajorScale();
            break;
    }
})

//MAJOR SCALE FUNCTIONS
//C MAJOR SCALE
const playCMajorScale = async () => {
    for (let i = 0; i < 8; i++) {
        await delay(800);

        let noteOfDot = document.querySelector(`.${cMajorScaleArray[i + 16]}-dot`);
        noteName.innerHTML = cMajorScaleArray[i + 8];
        image.setAttribute('src', `images/${cMajorScaleArray[i]}.png`)
        noteOfDot.style.visibility = "visible"
        setTimeout(() => {
            noteOfDot.style.visibility = "hidden"
        }, 1000)

        let root = document.getElementById(cMajorScaleArray[i]);
        root.play();
    }
}

//C SHARP AND D FLAT MAJOR SCALE
const playCSharpMajorScale = async () => {
    for (let i = 0; i < 8; i++) {
        await delay(800);

        let noteOfDot = document.querySelector(`.${cSharpMajorScaleArray[i + 16]}-dot`);
        noteName.innerHTML = cSharpMajorScaleArray[i + 8];
        image.setAttribute('src', `images/${cSharpMajorScaleArray[i]}.png`)
        noteOfDot.style.visibility = "visible"
        setTimeout(() => {
            noteOfDot.style.visibility = "hidden"
        }, 1000)

        let root = document.getElementById(cSharpMajorScaleArray[i]);
        root.play();
    }
}

//D MAJOR SCALE
const playDMajorScale = async () => {
    for (let i = 0; i < 8; i++) {
        await delay(800);

        let noteOfDot = document.querySelector(`.${dMajorScaleArray[i + 16]}-dot`);
        noteName.innerHTML = dMajorScaleArray[i + 8];
        image.setAttribute('src', `images/${dMajorScaleArray[i]}.png`)
        noteOfDot.style.visibility = "visible"
        setTimeout(() => {
            noteOfDot.style.visibility = "hidden"
        }, 1000)

        let root = document.getElementById(dMajorScaleArray[i]);
        root.play();
    }
}

//D SHARP AND E FLAT MAJOR SCALE
const playDSharpMajorScale = async () => {
    for (let i = 0; i < 8; i++) {
        await delay(800);

        let noteOfDot = document.querySelector(`.${dSharpMajorScaleArray[i + 16]}-dot`);
        noteName.innerHTML = dSharpMajorScaleArray[i + 8];
        image.setAttribute('src', `images/${dSharpMajorScaleArray[i]}.png`)
        noteOfDot.style.visibility = "visible"
        setTimeout(() => {
            noteOfDot.style.visibility = "hidden"
        }, 1000)

        let root = document.getElementById(dSharpMajorScaleArray[i]);
        root.play();
    }
}

//E MAJOR SCALE
const playEMajorScale = async () => {
    for (let i = 0; i < 8; i++) {
        await delay(800);

        let noteOfDot = document.querySelector(`.${eMajorScaleArray[i + 16]}-dot`);
        noteName.innerHTML = eMajorScaleArray[i + 8];
        image.setAttribute('src', `images/${eMajorScaleArray[i]}.png`)
        noteOfDot.style.visibility = "visible"
        setTimeout(() => {
            noteOfDot.style.visibility = "hidden"
        }, 1000)

        let root = document.getElementById(eMajorScaleArray[i]);
        root.play();
    }
}

//F MAJOR SCALE
const playFMajorScale = async () => {
    for (let i = 0; i < 8; i++) {
        await delay(800);

        let noteOfDot = document.querySelector(`.${fMajorScaleArray[i + 16]}-dot`);
        noteName.innerHTML = fMajorScaleArray[i + 8];
        image.setAttribute('src', `images/${fMajorScaleArray[i]}.png`)
        noteOfDot.style.visibility = "visible"
        setTimeout(() => {
            noteOfDot.style.visibility = "hidden"
        }, 1000)

        let root = document.getElementById(fMajorScaleArray[i]);
        root.play();
    }
}

//F SHARP AND G FLAT MAJOR SCALE
const playFSharpMajorScale = async () => {
    for (let i = 0; i < 8; i++) {
        await delay(800);

        let noteOfDot = document.querySelector(`.${fSharpMajorScaleArray[i + 16]}-dot`);
        noteName.innerHTML = fSharpMajorScaleArray[i + 8];
        image.setAttribute('src', `images/${fSharpMajorScaleArray[i]}.png`)
        noteOfDot.style.visibility = "visible"
        setTimeout(() => {
            noteOfDot.style.visibility = "hidden"
        }, 1000)

        let root = document.getElementById(fSharpMajorScaleArray[i]);
        root.play();
    }
}

//G MAJOR SCALE
const playGMajorScale = async () => {
    for (let i = 0; i < 8; i++) {
        await delay(800);

        let noteOfDot = document.querySelector(`.${gMajorScaleArray[i + 16]}-dot`);
        noteName.innerHTML = gMajorScaleArray[i + 8];
        image.setAttribute('src', `images/${gMajorScaleArray[i]}.png`)
        noteOfDot.style.visibility = "visible"
        setTimeout(() => {
            noteOfDot.style.visibility = "hidden"
        }, 1000)

        let root = document.getElementById(gMajorScaleArray[i]);
        root.play();
    }
}

//G SHARP AND A FLAT MAJOR SCALE
const playGSharpMajorScale = async () => {
    for (let i = 0; i < 8; i++) {
        await delay(800);

        let noteOfDot = document.querySelector(`.${gSharpMajorScaleArray[i + 16]}-dot`);
        noteName.innerHTML = gSharpMajorScaleArray[i + 8];
        image.setAttribute('src', `images/${gSharpMajorScaleArray[i]}.png`)
        noteOfDot.style.visibility = "visible"
        setTimeout(() => {
            noteOfDot.style.visibility = "hidden"
        }, 1000)

        let root = document.getElementById(gSharpMajorScaleArray[i]);
        root.play();
    }
}

//A MAJOR SCALE
const playAMajorScale = async () => {
    for (let i = 0; i < 8; i++) {
        await delay(800);

        let noteOfDot = document.querySelector(`.${aMajorScaleArray[i + 16]}-dot`);
        noteName.innerHTML = aMajorScaleArray[i + 8];
        image.setAttribute('src', `images/${aMajorScaleArray[i]}.png`)
        noteOfDot.style.visibility = "visible"
        setTimeout(() => {
            noteOfDot.style.visibility = "hidden"
        }, 1000)

        let root = document.getElementById(aMajorScaleArray[i]);
        root.play();
    }
}

//A SHARP AND B FLAT MAJOR SCALE
const playASharpMajorScale = async () => {
    for (let i = 0; i < 8; i++) {
        await delay(800);

        let noteOfDot = document.querySelector(`.${aSharpMajorScaleArray[i + 16]}-dot`);
        noteName.innerHTML = aSharpMajorScaleArray[i + 8];
        image.setAttribute('src', `images/${aSharpMajorScaleArray[i]}.png`)
        noteOfDot.style.visibility = "visible"
        setTimeout(() => {
            noteOfDot.style.visibility = "hidden"
        }, 1000)

        let root = document.getElementById(aSharpMajorScaleArray[i]);
        root.play();
    }
}

//B MAJOR SCALE
const playBMajorScale = async () => {
    for (let i = 0; i < 8; i++) {
        await delay(800);

        let noteOfDot = document.querySelector(`.${bMajorScaleArray[i + 16]}-dot`);
        noteName.innerHTML = bMajorScaleArray[i + 8];
        image.setAttribute('src', `images/${bMajorScaleArray[i]}.png`)
        noteOfDot.style.visibility = "visible"
        setTimeout(() => {
            noteOfDot.style.visibility = "hidden"
        }, 1000)

        let root = document.getElementById(bMajorScaleArray[i]);
        root.play();
    }
}

//PLAY MINOR SCALE BUTTON
playMinorScaleBtn.addEventListener('click', function () {
    let chosenMinorScale = document.getElementById("major-scales").value;

    switch (chosenMinorScale) {
        case "c":
            playCMinorScale();
            break;
        case "c-sharp":
            playCSharpMinorScale();
            break;
        case "d":
            playDMinorScale();
            break;
        case "d-sharp":
            playDSharpMinorScale();
            break;
        case "e":
            playEMinorScale();
            break;
        case "f":
            playFMinorScale();
            break;
        case "f-sharp":
            playFSharpMinorScale();
            break;
        case "g":
            playGMinorScale();
            break;
        case "g-sharp":
            playGSharpMinorScale();
            break;
        case "a":
            playAMinorScale();
            break;
        case "a-sharp":
            playASharpMinorScale();
            break;
        case "b":
            playBMinorScale();
            break;
        }
})

//MINOR SCALE FUNCTIONS
//C MINOR SCALE
const playCMinorScale = async () => {
    for (let i = 0; i < 8; i++) {
        await delay(800);

        let noteOfDot = document.querySelector(`.${cMinorScaleArray[i + 16]}-dot`);
        noteName.innerHTML = cMinorScaleArray[i + 8];
        image.setAttribute('src', `images/${cMinorScaleArray[i]}.png`)
        noteOfDot.style.visibility = "visible"
        setTimeout(() => {
            noteOfDot.style.visibility = "hidden"
        }, 1000)

        let root = document.getElementById(cMinorScaleArray[i]);
        root.play();
    }
}

//C SHARP AND D FLAT MINOR SCALE
const playCSharpMinorScale = async () => {
    for (let i = 0; i < 8; i++) {
        await delay(800);

        let noteOfDot = document.querySelector(`.${cSharpMinorScaleArray[i + 16]}-dot`);
        noteName.innerHTML = cSharpMinorScaleArray[i + 8];
        image.setAttribute('src', `images/${cSharpMinorScaleArray[i]}.png`)
        noteOfDot.style.visibility = "visible"
        setTimeout(() => {
            noteOfDot.style.visibility = "hidden"
        }, 1000)

        let root = document.getElementById(cSharpMinorScaleArray[i]);
        root.play();
    }
}

//D MINOR SCALE
const playDMinorScale = async () => {
    for (let i = 0; i < 8; i++) {
        await delay(800);

        let noteOfDot = document.querySelector(`.${dMinorScaleArray[i + 16]}-dot`);
        noteName.innerHTML = dMinorScaleArray[i + 8];
        image.setAttribute('src', `images/${dMinorScaleArray[i]}.png`)
        noteOfDot.style.visibility = "visible"
        setTimeout(() => {
            noteOfDot.style.visibility = "hidden"
        }, 1000)

        let root = document.getElementById(dMinorScaleArray[i]);
        root.play();
    }
}

//D SHARP AND E FLAT MINOR SCALE
const playDSharpMinorScale = async () => {
    for (let i = 0; i < 8; i++) {
        await delay(800);

        let noteOfDot = document.querySelector(`.${dSharpMinorScaleArray[i + 16]}-dot`);
        noteName.innerHTML = dSharpMinorScaleArray[i + 8];
        image.setAttribute('src', `images/${dSharpMinorScaleArray[i]}.png`)
        noteOfDot.style.visibility = "visible"
        setTimeout(() => {
            noteOfDot.style.visibility = "hidden"
        }, 1000)

        let root = document.getElementById(dSharpMinorScaleArray[i]);
        root.play();
    }
}

//E MINOR SCALE
const playEMinorScale = async () => {
    for (let i = 0; i < 8; i++) {
        await delay(800);

        let noteOfDot = document.querySelector(`.${eMinorScaleArray[i + 16]}-dot`);
        noteName.innerHTML = eMinorScaleArray[i + 8];
        image.setAttribute('src', `images/${eMinorScaleArray[i]}.png`)
        noteOfDot.style.visibility = "visible"
        setTimeout(() => {
            noteOfDot.style.visibility = "hidden"
        }, 1000)

        let root = document.getElementById(eMinorScaleArray[i]);
        root.play();
    }
}

//F MINOR SCALE
const playFMinorScale = async () => {
    for (let i = 0; i < 8; i++) {
        await delay(800);

        let noteOfDot = document.querySelector(`.${fMinorScaleArray[i + 16]}-dot`);
        noteName.innerHTML = fMinorScaleArray[i + 8];
        image.setAttribute('src', `images/${fMinorScaleArray[i]}.png`)
        noteOfDot.style.visibility = "visible"
        setTimeout(() => {
            noteOfDot.style.visibility = "hidden"
        }, 1000)

        let root = document.getElementById(fMinorScaleArray[i]);
        root.play();
    }
}

//F SHARP AND G FLAT MINOR SCALE
const playFSharpMinorScale = async () => {
    for (let i = 0; i < 8; i++) {
        await delay(800);

        let noteOfDot = document.querySelector(`.${fSharpMinorScaleArray[i + 16]}-dot`);
        noteName.innerHTML = fSharpMinorScaleArray[i + 8];
        image.setAttribute('src', `images/${fSharpMinorScaleArray[i]}.png`)
        noteOfDot.style.visibility = "visible"
        setTimeout(() => {
            noteOfDot.style.visibility = "hidden"
        }, 1000)

        let root = document.getElementById(fSharpMinorScaleArray[i]);
        root.play();
    }
}

//G MINOR SCALE
const playGMinorScale = async () => {
    for (let i = 0; i < 8; i++) {
        await delay(800);

        let noteOfDot = document.querySelector(`.${gMinorScaleArray[i + 16]}-dot`);
        noteName.innerHTML = gMinorScaleArray[i + 8];
        image.setAttribute('src', `images/${gMinorScaleArray[i]}.png`)
        noteOfDot.style.visibility = "visible"
        setTimeout(() => {
            noteOfDot.style.visibility = "hidden"
        }, 1000)

        let root = document.getElementById(gMinorScaleArray[i]);
        root.play();
    }
}

//G SHARP AND A FLAT MINOR SCALE
const playGSharpMinorScale = async () => {
    for (let i = 0; i < 8; i++) {
        await delay(800);

        let noteOfDot = document.querySelector(`.${gSharpMinorScaleArray[i + 16]}-dot`);
        noteName.innerHTML = gSharpMinorScaleArray[i + 8];
        image.setAttribute('src', `images/${gSharpMinorScaleArray[i]}.png`)
        noteOfDot.style.visibility = "visible"
        setTimeout(() => {
            noteOfDot.style.visibility = "hidden"
        }, 1000)

        let root = document.getElementById(gSharpMinorScaleArray[i]);
        root.play();
    }
}

//A MAJOR SCALE
const playAMinorScale = async () => {
    for (let i = 0; i < 8; i++) {
        await delay(800);

        let noteOfDot = document.querySelector(`.${aMinorScaleArray[i + 16]}-dot`);
        noteName.innerHTML = aMinorScaleArray[i + 8];
        image.setAttribute('src', `images/${aMinorScaleArray[i]}.png`)
        noteOfDot.style.visibility = "visible"
        setTimeout(() => {
            noteOfDot.style.visibility = "hidden"
        }, 1000)

        let root = document.getElementById(aMinorScaleArray[i]);
        root.play();
    }
}

//A SHARP AND B FLAT MAJOR SCALE
const playASharpMinorScale = async () => {
    for (let i = 0; i < 8; i++) {
        await delay(800);

        let noteOfDot = document.querySelector(`.${aSharpMinorScaleArray[i + 16]}-dot`);
        noteName.innerHTML = aSharpMinorScaleArray[i + 8];
        image.setAttribute('src', `images/${aSharpMinorScaleArray[i]}.png`)
        noteOfDot.style.visibility = "visible"
        setTimeout(() => {
            noteOfDot.style.visibility = "hidden"
        }, 1000)

        let root = document.getElementById(aSharpMinorScaleArray[i]);
        root.play();
    }
}

//B MINOR SCALE
const playBMinorScale = async () => {
    for (let i = 0; i < 8; i++) {
        await delay(800);

        let noteOfDot = document.querySelector(`.${bMinorScaleArray[i + 16]}-dot`);
        noteName.innerHTML = bMinorScaleArray[i + 8];
        image.setAttribute('src', `images/${bMinorScaleArray[i]}.png`)
        noteOfDot.style.visibility = "visible"
        setTimeout(() => {
            noteOfDot.style.visibility = "hidden"
        }, 1000)

        let root = document.getElementById(bMinorScaleArray[i]);
        root.play();
    }
}

//CLOSE BUTTON TO HIDE MODAL
closeBtn.addEventListener('click', function () {
    modal.classList.add("hidden");
})

//CLICK ON NOTE
for (let note of notes) {
    note.addEventListener('click', function (e) {
        playNote(note);
        changeNoteName(e);
        changePicture(e);
        showDot(e);
        if(isQuizMode){
            showCorrectMessage(e);
        }
    })
}

//PLAY THE CORRESPONDING NOTE AUDIO
function playNote(note) {
    const noteAudio = document.getElementById(note.dataset.note);
    noteAudio.currentTime = 0;
    noteAudio.play();
    note.classList.add('active');
    noteAudio.addEventListener('ended', function () {
        note.classList.remove('active');
    })
}

//CLICK ON OPEN NOTE
for (let openNote of openNotes) {
    openNote.addEventListener('click', function (e) {
        playOpenNote(openNote);
        changeNoteName(e);
        changePicture(e);
        showDot(e);
        if(isQuizMode){
            showCorrectMessage(e);
        }
    })
}

//PLAY THE CORRESPONDING OPEN NOTE AUDIO
function playOpenNote(openNote) {
    const openNoteAudio = document.getElementById(openNote.dataset.note);
    openNoteAudio.currentTime = 0;
    openNoteAudio.play();
    openNote.classList.add('active');
    openNoteAudio.addEventListener('ended', function () {
        openNote.classList.remove('active');
    })
}

//CHANGE PICTURE OF NOTE ON STAFF
function changePicture(e) {
    let clickedNoteName = e.target.classList;

    for (let i = 0; i < noteNameClassesForStaffDisplay.length; i++) {
        if (clickedNoteName.contains(noteNameClassesForStaffDisplay[i])) {
            image.setAttribute('src', `images/${noteNameClassesForStaffDisplay[i]}.png`)
        }
    }
}

//CHANGE NOTE NAME TEXT DISPLAY
function changeNoteName(e) {
    for (let i = 0; i < noteNameClassesForNoteTextDisplay.length; i++) {
        let clickedNoteName = e.target.classList;

        if (clickedNoteName.contains(noteNameClassesForNoteTextDisplay[i])) {
            noteName.innerHTML = noteNameClassesForNoteTextDisplay[i];
        }
    }
}

//SHOW AND HIDE DOT
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

//QUIZ 
const quizBtn = document.querySelector(".quiz-btn");
const nextBtn = document.querySelector(".next-btn");
const quizNote = document.querySelector(".quiz-note");
const message = document.querySelector(".message");
const quizModal = document.querySelector(".quiz-modal");
const scoreText = document.querySelector(".score");
let score = 0;

quizBtn.addEventListener('click', function(){
    isQuizMode = true;
    nextBtn.disabled = true;
    let randomNumber = Math.floor((Math.random() * noteNameClassesForNoteTextDisplay.length));
    randomNote = noteNameClassesForNoteTextDisplay[randomNumber];
    quizNote.innerHTML = randomNote;
    quizModal.classList.add("active")

})

//SHOW CORRECT MESSAGE
function showCorrectMessage(e){
    if(e.target.classList.contains(randomNote)){
        score++;
        message.innerHTML = "correct!";
        message.style.color = "green";
        scoreText.innerHTML = score;
        if(score >= 0){
            scoreText.style.color = "black";
        }
        nextBtn.disabled = false;

    } else {
        score--;
        scoreText.innerHTML = score;
        message.innerHTML = "incorrect. Try again.";
        message.style.color = "red";
        if(score < 0){
            scoreText.style.color = "red";
        }
        nextBtn.disabled = true;
    }
}

nextBtn.addEventListener('click', function(){
    let randomNumber = Math.floor((Math.random() * noteNameClassesForNoteTextDisplay.length));
    randomNote = noteNameClassesForNoteTextDisplay[randomNumber];
    quizNote.innerHTML = randomNote;
    message.innerHTML = "";
    nextBtn.disabled = true;
})

