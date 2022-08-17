const startButton = document.querySelector('#startGameButton')
const splashScreen = document.querySelector('#displaySplashInstructionsContainer')
const avatar = document.getElementById('avatar')
const gameTimerDisplay = document.querySelector('#stopwatchSecondsDisplay')
const endSplashScreen = document.querySelector('#displayEndGameContainer')

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

function endGameMessage() {
    alert('Far out brah! That was totally radical, you found some sweet lines down those faces! Catch you on the flip')
}

function saveResult(playerName, playerScore) {
    let playerSaveObject = {name: playerName, score: playerScore}
    localStorage.setItem('playerKey', JSON.stringify(playerSaveObject))
}

function getName(nameInput) {
    let playerName = nameInput.Name.value
    if (playerName.length === 3) {
        saveResult(playerName, timer)
    }
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
                    endGameMessage()
                    clearInterval(raceStopwatch)
                    window.document.removeEventListener("keydown", playGame)
                }
            }
        }
    })
})

