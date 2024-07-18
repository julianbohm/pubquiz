const finalScore = document.getElementById('finalScore');
const score = localStorage.getItem('mostRecentScore');

finalScore.innerText = score;

function restartQuiz() {
    window.location.assign('../index.html');
}