const leaderboardContainer = document.getElementById('mainLeaderboardContainer')

function sortScoresAscending(scoreArray) {
    return [...scoreArray].sort((a, b) => {
        return a.score - b.score
    })
}

window.addEventListener('load', () => {
    const leaderboardArray = JSON.parse(localStorage.getItem('leaderboard'))
    const sortedLeaderboardArray = sortScoresAscending(leaderboardArray)
    for(let i=0;i < 11; i++){
        const playerName = sortedLeaderboardArray[i].name
        const playerScore = parseFloat(sortedLeaderboardArray[i].score).toFixed(2)
        leaderboardContainer.innerHTML += `<div class="leaderboardContent"><p class="playerName">${playerName}</p><p>${playerScore}s</p></div>`
    }
})
