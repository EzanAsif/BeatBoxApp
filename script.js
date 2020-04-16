// TODO : create a key listener
// TODO : connect key press to play a beat
// TODO : create a database of beats
// TODO : set the colors programatically

window.onload = () => {
    setButtons()
}

let beats = {
    "a": {
        beat: "./assets/5_10_Constellation 114 BPM E.wav",
        color: "#00fffe"
    },
    "s": {
        beat: "./assets/11_Tokyo - 130Bpm (Key C).wav",
        color: "#00fffe"
    },
    "d": {
        beat: "./assets/19_Deed 140.wav",
        color: "#00fffe"
    },
    "f": {
        beat: "./assets/Kit1_Arp_G_148.wav",
        color: "#00fffe"
    },
    "g": {
        beat: "./assets/Drum Sticks Hit 3.mp3",
        color: "#FF00FF"
    },
    "h": {
        beat: "./assets/33_Scorpion 150.wav",
        color: "#FF00FF"
    },
    "j": {
        beat: "./assets/kick.wav",
        color: "#FF00FF"
    },
    "k": {
        beat: "./assets/k key.wav",
        color: "#28a745"
    },
    "l": {
        beat: "./assets/Kit2_Drums_HiHat_D_140.wav",
        color: "#28a745"
    },
}

const setButtons = () => {
    for (let beatKey in beats) {
        let beat = beats[beatKey]
        console.log(beat)
        let element = document.getElementById(beatKey);
        element.style.borderColor = beat.color;
        element.addEventListener("transitionend", () => {
            element.style.backgroundColor = "transparent";
            element.style.boxshadow = "none";
        })
    }
}

const onButtonpress = (buttonKey) => {
    let element = document.getElementById(buttonKey);
    element.style.backgroundColor = beats[buttonKey].color;
    //                         hor ver blur shad color
    element.style.boxShadow = '0px 0px 17px 0px ${beats[buttonKey].color}'
}



const playbeat = (buttonKey) => {
    let audioSrc = beats[buttonKey].beat;
    let audio = new Audio(audioSrc);
    audio.currentTime = 0;
    audio.play()

}


document.addEventListener('keydown', (event) => {
    playbeat(event.key)
    onButtonpress(event.key)
})