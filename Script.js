const startButton = document.querySelector('#startGameButton');
const splashScreen = document.querySelector('#displaySplashInstructionsContainer')
let avatar = document.getElementById('avatar')

function checkKey(lastKeyPressed, currentKeyPressed) {
    return lastKeyPressed !== currentKeyPressed;
}

function movePenguin(penguinPosition){
    penguinPosition += 15
    avatar.style.left = penguinPosition + 'px'
    return penguinPosition
}

function checkEnd(penguinPosition){
    return penguinPosition > 1000;
}

function endGame(){
    alert('Far out brah! That was totally radical, you found some sweet lines down those faces! Catch you on the flip')
}

startButton.addEventListener('click', () => {
    splashScreen.style.display = "none";
})

avatar.style.left = '0px'
let penguinPosition = parseInt(avatar.style.left)
let lastKeyPressed = ""

document.addEventListener("keydown", (event) => {
    switch (event.code) {
        case "ArrowLeft":
            if (checkKey(lastKeyPressed, "ArrowLeft")) {
                lastKeyPressed = "ArrowLeft"
                penguinPosition = movePenguin(penguinPosition)
                if(checkEnd(penguinPosition)){
                    endGame()
                }
            }
            break;
        case "ArrowRight":
            if (checkKey(lastKeyPressed, "ArrowRight")) {
                lastKeyPressed = "ArrowRight"
                penguinPosition = movePenguin(penguinPosition)
                if(checkEnd(penguinPosition)){
                    endGame()
                }
            }
            break;
    }
})
