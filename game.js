import { firstChapter } from "./history.js"

const textElement = document.getElementById('text');
const optionsButton = document.getElementById('options-buttons');
const Replay_Button = document.getElementById('replay-button')

//state = {};
let currentIndex = 0;

const startGame = () => {
    //state = {};
    currentIndex = 0;
    loadText(currentIndex);
};

const loadText = (index) => {
    optionsButton.innerHTML = '';
    const currentScenes = firstChapter.history[index];
    textElement.innerText = currentScenes.npcText
    
    currentScenes.playerChoices.forEach((choice, choiceIndex) => {
        const button = document.createElement('button');
        button.innerText = choice
        button.classList.add('btn');
        button.addEventListener('click', () => nextScene(choiceIndex));
        optionsButton.appendChild(button);
    });
};


const nextScene = (choiceIndex) => {
    currentIndex++;
    if (currentIndex < firstChapter.history.length){
        
        loadText(currentIndex);
    }else{
        endGame();
    }
}

const endGame = () => {
    textElement.innerText = "merci de jouer"
    optionsButton.innerHTML = ''
    replayButton();
}

const replayButton = () => {
    Replay_Button = document.createElement('button');
}

startGame();