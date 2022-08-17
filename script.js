const startButton = document.querySelector('#startGameButton')
const splashScreen = document.querySelector('#displaySplashInstructionsContainer')
const avatar = document.getElementById('avatar')
const gameTimerDisplay = document.querySelector('#stopwatchSecondsDisplay')

avatar.style.left = '0px'
let penguinPosition = parseInt(avatar.style.left)
let lastKeyPressed = ""
let timer = 0
let raceStopwatch

function checkKey(lastKeyPressed, currentKeyPressed) {
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

startButton.addEventListener('click', () => {
    splashScreen.style.display = "none"
    document.addEventListener("keydown", function playGame(e) {
        if (lastKeyPressed === '') {
            raceStopwatch = setInterval(() => {
                timer++
                gameTimerDisplay.textContent = timer
            }, 1000)
        }
        if (e.code === "ArrowLeft" || e.code === "ArrowRight") {
            if (checkKey(lastKeyPressed, e.code)) {
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
