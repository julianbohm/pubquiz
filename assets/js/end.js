// Getters for DOM
const finalScore = document.getElementById('finalScore');
const score = localStorage.getItem('mostRecentScore');

// Set final score on page
finalScore.innerText = score;

/**
 * Restars the quiz by redirecting brower to index page
 */
function restartQuiz() {
    window.location.assign('../index.html');
}