
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
    alert('')
}

document.addEventListener("keydown", (event) => {
    switch (event.code) {
        case "ArrowLeft":
            if (checkKey(lastKeyPressed, "ArrowLeft")) {
                lastKeyPressed = "ArrowLeft"
                penguinPosition = movePenguin(penguinPosition)
            }
            break;
        case "ArrowRight":
            if (checkKey(lastKeyPressed, "ArrowRight")) {
                lastKeyPressed = "ArrowRight"
                penguinPosition = movePenguin(penguinPosition)
            }
            break;
    }
})
