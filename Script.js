let lastKeyPressed = ""
box2.style.left = '10px'
let penguinPosition = parseInt(box2.style.left)

function checkKey(lastKeyPressed, currentKeyPressed) {
    return lastKeyPressed !== currentKeyPressed;
}

function movePenguin(penguinPosition){
    penguinPosition += 5
    box2.style.left = penguinPosition + 'px'
    return penguinPosition
}

document.addEventListener("keydown", (event) => {
    switch (event.code) {
        case "ArrowLeft":
            if (checkKey(lastKeyPressed, "ArrowLeft")) {
                movePenguin(penguinPosition)
                // console.log to test
                console.log('penguin moves left')
                lastKeyPressed = "ArrowLeft"
            }
            break;
        case "ArrowRight":
            if (checkKey(lastKeyPressed, "ArrowRight")) {
                movePenguin(penguinPosition)
                // console.log to test
                console.log('penguin moves right')
                lastKeyPressed = "ArrowRight"
            }
            break;
    }
})
