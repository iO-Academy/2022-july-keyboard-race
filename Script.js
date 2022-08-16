let avatar = document.getElementById('avatar')

avatar.style.left = '10px'
let penguinPosition = parseInt(avatar.style.left)
let lastKeyPressed = ""

function checkKey(lastKeyPressed, currentKeyPressed) {
    return lastKeyPressed !== currentKeyPressed;
}

function movePenguin(penguinPosition){
    penguinPosition += 5
    avatar.style.left = penguinPosition + 'px'
    return penguinPosition
}

function checkEnd(penguinPosition){
    return penguinPosition > 100;
}

function endGame(){
    alert('This is a placeholder message about the game ending')
}

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
