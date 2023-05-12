const hiddenLetters = document.getElementById("hidden-letters");
const themesContainer = document.getElementById("themes-container");
const keyboard = document.getElementById("keyboard");
const restartButton = document.getElementById("new-game");
const optBtn = document.getElementById("opt-btn");

let secretWord;
let chosenTheme;
let dynamicList = [];
let tryAmount = 6;
// const hangedManFig

let themes_obj = {
    country: ["Brazil", "Mexico"],
    sport: ["Football", "Basketball"],
    object: ["Pen", "Chair"],
}

function createSecretWord(theme) {
    chosenTheme = theme;
    if (theme == "country") {
        random_word = themes_obj.country[Math.floor((Math.random() * themes_obj.country.length))];
        
    }
    else if (theme == "sport") {
        secretWord = themes_obj.sport[Math.floor((Math.random() * themes_obj.sport.length))];
    }
    else if (theme == "object") {
        secretWord = themes_obj.object[Math.floor((Math.random() * themes_obj.object.length))];
    }
    console.log(secretWord)
}

function showHiddenSpaces() {
    const theme = document.getElementById("theme");
    theme.innerHTML = chosenTheme;
    const wordScreen = document.getElementById("hidden-letters");

    for (i = 0; i < secretWord.length; i++) {
        if (dynamicList[i] == undefined) {
            dynamicList[i] = "&nbsp;"
            wordScreen.innerHTML = wordScreen.innerHTML + "<div class='letters'>" + dynamicList[i] + "</div>"
        } else {
            wordScreen.innerHTML = wordScreen.innerHTML + "<div class='letters'>" + dynamicList[i] + "</div>"
        }
    }
}

function verifyChosenLetter(letter) {
    if (tryAmount > 0) {
        changeLetterStyle(letter);
    }
}

function changeLetterStyle(letter) {
    document.getElementById(letter).style.background = "#23243d"
}

// CREATING KEYBOARD
function generateButtons() {
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('').map(letter =>
        `
        <button 
            class="button" id="` + letter + `"
            onClick="verifyChosenLetter('`+ letter +`')"
        >
            ` +letter+ `
        </button>
        `
        ).join('');
    document.getElementById("keyboard").innerHTML = buttonsHTML;
}


// STARTER
const starter = () => {
    wins_amount = 0;
    counter = 0;
}

// CALLING FUNCTIONS
createSecretWord("object");
showHiddenSpaces();

// RESTART GAME
generateButtons();
// restartButton.addEventListener("click", starter);
// window.onload = starter;