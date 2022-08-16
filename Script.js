let lastKeyPressed = ""

function checkKey(lastKeyPressed, currentKeyPressed) {
    return lastKeyPressed !== currentKeyPressed;
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
                // movePenguin()
                // console.log to test
                console.log('penguin moves left')
                lastKeyPressed = "ArrowLeft"
            }
            break;
        case "ArrowRight":
            if (checkKey(lastKeyPressed, "ArrowRight")) {
                // movePenguin()
                // console.log to test
                console.log('penguin moves right')
                lastKeyPressed = "ArrowRight"
            }
            break;
    }
})
