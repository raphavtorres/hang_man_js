const hiddenLetters = document.getElementById("hidden-letters");
const themesContainer = document.getElementById("themes-container");
const keyboard = document.getElementById("keyboard");
const restartButton = document.getElementById("new-game");


let secretWord;
let chosenTheme;
let dynamicList = [];
let tryAmount = 6;
// const hangedManFig

let themes_obj = {
    country: ["BRASIL", "MEXICO"],
    sport: ["FOOTBALL", "BASKETBALL"],
    object: ["PEN", "CHAIR"],
}

createSecretWord("object");
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

showHiddenSpaces();
function showHiddenSpaces() {
    const theme = document.getElementById("theme");
    theme.innerHTML = chosenTheme;

    const wordScreen = document.getElementById("hidden-letters");
    wordScreen.innerHTML = "";

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
    document.getElementById(letter).disabled = true;
    if (tryAmount > 0) {
        changeLetterStyle(letter);
        letterInSecretWord(letter);
        showHiddenSpaces();
    }
}

function changeLetterStyle(letter) {
    document.getElementById(letter).style.background = "#23243d"
}

function changeHangedImg() {
    switch(tryAmount) {
        case 5:
            document.getElementById("hanged-img").src="hangman_draw2.png";
            break;
        case 4:
            document.getElementById("hanged-img").src="hangman_draw3.png";
            break;
        case 3:
            document.getElementById("hanged-img").src="hangman_draw4.png";
            break;
        case 2:
            document.getElementById("hanged-img").src="hangman_draw5.png";
            break;
        case 1:
            document.getElementById("hanged-img").src="hangman_draw6.png";
            break;
        case 0:
            document.getElementById("hanged-img").src="hangman_draw7.png";
            break;
    }
}

function letterInSecretWord(letter) {
    const position = secretWord.indexOf(letter);

    if (position < 0) {
        tryAmount--;
        changeHangedImg();
        if (tryAmount == 0) {
            document.body.style.filter = "brightness(50%)";
            sleep(10)
            tryAmount--;
            if (tryAmount == -1) {
                window.alert("You've lost");
            }           
        }
        
    } else {
        for(i = 0; i < secretWord.length; i++) {
            if (secretWord[i] == letter) {
                dynamicList[i] = letter;
            }
        }
    }
    let win = true;
    for(i = 0; i < secretWord.length; i++) {
        if (secretWord[i] != dynamicList[i]) {
            win = false;
        }
    }
    if (win) {
        tryAmount = 0;
    }
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

// RESTART GAME
generateButtons();
