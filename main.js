const hiddenLetters = document.getElementById("hidden-letters");
const themesContainer = document.getElementById("themes-container");
const keyboard = document.getElementById("keyboard");
const restartButton = document.getElementById("new-game");
const optBtn = document.getElementById("opt-btn");
// const hangedManFig

let themes_obj = {
    country: ["Brazil", "Mexico"],
    sport: ["Football", "Basketball"],
    object: ["Pen", "Chair"],
}

function createSecretWord(category) {
    let random_word = ""
    if (category == "country") {
        random_word = themes_obj.country[Math.floor((Math.random() * themes_obj.country.length))];
        
    }
    else if (category == "sport") {
        random_word = themes_obj.sport[Math.floor((Math.random() * themes_obj.sport.length))];
    }
    else if (category == "object") {
        random_word = themes_obj.object[Math.floor((Math.random() * themes_obj.object.length))];
    }
    console.log(random_word);
}

function showHiddenSpaces() {
    const 
}

createSecretWord("object");

// CREATING KEYBOARD
function generateButtons() {
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('').map(letter =>
        `
        <button 
            class="button" id="` + letter + `"
            onClick="handleGuess('`+ letter +`')"
        >
            ` +letter+ `
        </button>
        `
        ).join('');
    document.getElementById("keyboard").innerHTML = buttonsHTML;
}

const btnLocker = () => {
    let themeButtons = document.querySelectorAll();
    let letterButtons = document.querySelectorAll();
}

// STARTER
const starter = () => {
    wins_amount = 0;
    counter = 0;
}

// RESTART GAME
generateButtons();
// restartButton.addEventListener("click", starter);
// window.onload = starter;