let lastKeyPressed = ""
let avatar = document.getElementById('avatar')
avatar.style.left = '10px'
let penguinPosition = parseInt(avatar.style.left)

function checkKey(lastKeyPressed, currentKeyPressed) {
    return lastKeyPressed !== currentKeyPressed;
}

function movePenguin(penguinPosition){
    penguinPosition += 5
    avatar.style.left = penguinPosition + 'px'
    return penguinPosition
}

document.addEventListener("keydown", (event) => {
    switch (event.code) {
        case "ArrowLeft":
            if (checkKey(lastKeyPressed, "ArrowLeft")) {
                movePenguin(penguinPosition)
                lastKeyPressed = "ArrowLeft"
            }
            break;
        case "ArrowRight":
            if (checkKey(lastKeyPressed, "ArrowRight")) {
                movePenguin(penguinPosition)
                lastKeyPressed = "ArrowRight"
            }
            break;
    }
})
