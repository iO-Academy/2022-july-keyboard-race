const startButton = document.querySelector('#startGameButton')
const splashScreen = document.querySelector('#displaySplashInstructionsContainer')
const avatar = document.getElementById('avatar')

avatar.style.left = '0px'
let penguinPosition = parseInt(avatar.style.left)
let lastKeyPressed = ""

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

function endGame() {
    alert('Far out brah! That was totally radical, you found some sweet lines down those faces! Catch you on the flip')
}

startButton.addEventListener('click', () => {
    splashScreen.style.display = "none"
    document.addEventListener("keydown", (event) => {
        if (event.code === "ArrowLeft" || event.code === "ArrowRight") {
            if (checkKey(lastKeyPressed, event.code)) {
                lastKeyPressed = event.code
                penguinPosition = movePenguin(penguinPosition)
                if (checkEnd(penguinPosition)) {
                    endGame()
                }
            }
        }
    })
})



 function saveResult(key, value) {
   const user = 'Player'
    const players = [playerName, playerTime]
    localStorage.setItem(user, players)
    // if (endGame()) {
    //     localStorage.getItem(players)
    // }
}


let playerName = '#nameField'
let playerTime = 12
saveResult()


