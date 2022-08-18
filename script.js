const startButton = document.querySelector('#startGameButton')
const splashScreen = document.querySelector('#displaySplashInstructionsContainer')
const avatar = document.getElementById('avatar')
const gameTimerDisplay = document.querySelector('#stopwatchSecondsDisplay')
const endSplashScreen = document.querySelector('#displayEndGameContainer')
const saveButton = document.getElementById('saveButton')
const playButton = document.getElementById('playButton')
const form = document.getElementById('formContainer')

avatar.style.left = '0px'
let penguinPosition = parseInt(avatar.style.left)
let lastKeyPressed = ""
let timer = 0
let raceStopwatch

function checkKeyIsDifferent(lastKeyPressed, currentKeyPressed) {
    return lastKeyPressed !== currentKeyPressed
}

function movePenguin(penguinPosition) {
    penguinPosition += 15
    avatar.style.left = penguinPosition + 'px'
    return penguinPosition
}

function checkEnd(penguinPosition) {
    return penguinPosition > 1000
}

function saveResult(playerName, playerScore) {
    if (validateName(playerName)) {
        let playerSaveObject = {name: playerName, score: playerScore}
        localStorage.setItem('playerKey', JSON.stringify(playerSaveObject))
        alert('Score Saved!')
    } else {
        alert('Please enter a 3 charater name else your score won\'t be saved')
    }
}

function validateName(playerName) {
    return playerName.length === 3;
}

startButton.addEventListener('click', () => {
    splashScreen.style.display = "none"
    document.addEventListener("keydown", function playGame(e) {
        if (lastKeyPressed === '') {
            raceStopwatch = setInterval(() => {
                timer += 0.01
                gameTimerDisplay.textContent = parseFloat(timer).toFixed(2)
            }, 10)
        }
        if (e.code === "ArrowLeft" || e.code === "ArrowRight") {
            if (checkKeyIsDifferent(lastKeyPressed, e.code)) {
                lastKeyPressed = e.code
                penguinPosition = movePenguin(penguinPosition)
                if (checkEnd(penguinPosition)) {
                    clearInterval(raceStopwatch)
                    window.document.removeEventListener("keydown", playGame)
                    if (checkEnd(penguinPosition)) {
                       endSplashScreen.style.display = 'flex';
                    }
                }
            }
        }
    })
})

saveButton.addEventListener('click', () => {
    saveResult(form.name.value, timer)
})

playButton.addEventListener('click', () => {
    history.go(0)
})

