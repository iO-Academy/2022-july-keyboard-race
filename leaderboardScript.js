const leaderboardContainer = document.getElementById('mainLeaderboardContainer')
const mainPageButton = document.getElementById('backButton')

function sortScoresAscending(scoreArray) {
    return [...scoreArray].sort((a, b) => {
        return a.score - b.score
    })
}

window.addEventListener('load', () => {
    const leaderboardArray = JSON.parse(localStorage.getItem('leaderboard'))
    const sortedLeaderboardArray = sortScoresAscending(leaderboardArray)
    sortedLeaderboardArray.forEach((player) => {
        const playerName = player.name
        let playerScore = player.score
        playerScore = parseFloat(playerScore).toFixed(2)
        leaderboardContainer.innerHTML += `<div class="leaderboardContent"><p class="playerName">${playerName}</p><p>${playerScore}s</p></div>`
    })
})

mainPageButton.addEventListener('click', () => {
    location.replace('index.html')
})