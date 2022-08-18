const leaderboardContainer = document.getElementById('mainLeaderboardContainer')

function sortScoresAscending(scoreArray) {
    return [...scoreArray].sort((a, b) => {
        return a.score - b.score
    })
}

window.addEventListener('load', () => {
    //create array from localStorage
    const leaderboardArray = JSON.parse(localStorage.getItem('leaderboard'))
    // sort array by ascending
    const sortedLeaderboardArray = sortScoresAscending(leaderboardArray)
    //foreach through the array
    sortedLeaderboardArray.forEach((player) => {
        //get player name and score
        const playerName = player.name
        let playerScore = player.score
        playerScore = parseFloat(playerScore).toFixed(2)
        //print name and score for each player
        leaderboardContainer.innerHTML += `<div class="leaderboardContent"><p>${playerName}</p><p>${playerScore}s</p></div>`
    })
})