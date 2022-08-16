let gameTimer = document.querySelector('#stopwatchSecondsDisplay')

let timer = 0
const raceTimer = setInterval(() => {
    timer++
    gameTimer.textContent = timer
}, 1000)

function incrementTimer(timer) {
    timer++
    return timer
}


// document.addEventListener('keypress',
//     function (event) {
//         if (even t.code == 'RightArrow' || 'LeftArrow') }