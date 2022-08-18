const leaderboardContainer = document.getElementById('mainLeaderboardContainer')

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
        const playerScore = parseFloat(player.score).toFixed(2)
        leaderboardContainer.innerHTML += `<div class="leaderboardContent"><p class="playerName">${playerName}</p><p>${playerScore}s</p></div>`
    })
})
