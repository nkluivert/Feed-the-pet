
const startGame = document.getElementById("startGame");
const startScreen = document.getElementById("startScreen");

const hungerBarProgress = document.getElementById("hungerBarProgress");
const hygieneBarProgress = document.getElementById("hygieneBarProgress");

const hungerInterval = setInterval(decreaseHunger, 2500);
const hygieneInterval = setInterval(decreaseHygiene, 4000);

const eatButton = document.getElementById("eatButton");
const sprayButton = document.getElementById("sprayButton");

let hunger = 100;
let hygiene = 100;

let hungerLow = 20;
let hygieneLow = 20;

let isPlaying = false;

let eatSound = new Audio("audio/eat_sound.mp3");
let spraySound = new Audio("audio/spray_sound.mp3");

let bgMusic = new Audio("audio/happy_pokemon_music.mp3");
let sadMusic = new Audio("audio/sad_music.mp3");

function updateHunger() {
    hungerBarProgress.style.width = hunger + "%";
}
function updateHygiene() {
    hygieneBarProgress.style.width = hygiene + "%";
}

function decreaseHunger() {
    if (hunger > 0) {
        hunger -= 2;
        updateHunger();
    } else {
        clearInterval(hungerInterval);
        console.log("You are starving! Eat something");
    }
`chatgpt code voor eigen onderzoek https://chatgpt.com/share/67deac5d-d5f0-800f-9d03-fe206fc86737`
    if (hunger <= hungerLow && !isPlaying) {
        sadMusic.play();
        isPlaying = true;
        bgMusic.pause();

    } else if (hunger > hungerLow && isPlaying) {
        sadMusic.pause();
        sadMusic.currentTime = 0; 
        isPlaying = false;
        bgMusic.play()
    }
}
function decreaseHygiene() {
    if (hygiene > 0) {
        hygiene -= 2;
        updateHygiene();
    } else {
        clearInterval(hygieneInterval);
        console.log("You are stinky! Spray some perfume");
    }

}

function increaseHunger() {
    updateHunger(hunger += 20);
}

function increaseHygiene() {
    updateHygiene(hygiene += 20);
}

startGame.addEventListener("click", function () {
    startScreen.style.display = "none";
})

startGame.addEventListener("click", () => {
    bgMusic.play().catch();
});

eatButton.addEventListener("click", increaseHunger);
sprayButton.addEventListener("click", increaseHygiene);


eatButton.addEventListener("click", () => {
    eatSound.play().catch();
});

sprayButton.addEventListener("click", () => {
    spraySound.play().catch();
});



