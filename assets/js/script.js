const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let acceptingAnswers = false;

let questions = [

    {
        question: 'What is the name of the element with the chemical symbol "He"? ',
        choice1: 'Helium',
        choice2: 'Hydrogen',
        choice3: 'Holmium',
        choice4: 'Hafnium',
        answer: 1,
    },
    {
        question: 'Which British archaeologist discovered Tutankhamun’s tomb?',
        choice1: 'Thomas Young',
        choice2: 'Karl Richard Lepsius',
        choice3: 'Ippolito Rosellini',
        choice4: 'Howard Carter',
        answer: 4,
    },
    {
        question: 'A “lepidopterist” is someone who studies which type of creature?',
        choice1: 'Birds',
        choice2: 'Butterflies',
        choice3: 'Fish',
        choice4: 'Ants',
        answer: 2,
    },
    {
        question: 'What was the average life expectancy of an Englishman in the middle ages? ',
        choice1: '33 years',
        choice2: '13 years',
        choice3: '21 years',
        choice4: '41 years',
        answer: 1,
    },
    {
        question: 'Hickory trees produce which types of nuts? ',
        choice1: 'Walnuts',
        choice2: 'Pistachios',
        choice3: 'Macadamia',
        choice4: 'Pecans',
        answer: 4,
    },
    {
        question: "What is the alcoholic beverage 'sake' made of? ",
        choice1: 'Seafood',
        choice2: 'Soybeans',
        choice3: 'Rice',
        choice4: 'Grapes',
        answer: 3,
    },
    {
        question: 'What was the original name of Mickey Mouse? ',
        choice1: 'The Rat',
        choice2: 'Marvin Mouse',
        choice3: 'Mortimer Mouse',
        choice4: 'Marshall Mouse',
        answer: 3,
    },
    {
        question: 'Which star is the brightest star in the night sky? ',
        choice1: 'Sirius A',
        choice2: 'Arcturus',
        choice3: 'North Star',
        choice4: 'None of these',
        answer: 1,
    },
    {
        question: 'What is the capital city of Australia?',
        choice1: 'Sydney',
        choice2: 'Melbourne',
        choice3: 'Canberra',
        choice4: 'Brisbane',
        answer: 3,
    },
    {
        question: 'In what year was the first iPhone released?',
        choice1: '2005',
        choice2: '2007',
        choice3: '2008',
        choice4: '2010',
        answer: 2,
    },
];


// constant

const CORRECT_BONUS = 1;
const MAX_QUESTIONS = 5;

startGame();

function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

/**
 * 
 * @returns  redirect to end.html url
 */

function getNewQuestion() {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        // Store the score in localStorage
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('/pubquiz/end.html');
    }


    /**
     * to bring question
     */

    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    // to bring answers choices to questions
    choices.forEach(choice => {
        const number = choice.dataset.number;
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;

}




choices.forEach(choice => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset.number;

        const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply == 'correct') {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 500);
    });
});

function incrementScore(num) {
    score += num;
}