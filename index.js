const quizDB = [
    {
        question: "Q1: HTML stands for?",
        a: "Hiper Test Markup Language",
        b: "Hyper Text Marked Language",
        c: "Hyper Test Marked Language",
        d: "Hyper Text Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2: CSS stands for?",
        a: "Cascading Style Sheets",
        b: "Cartoon Style Sheets",
        c: "Cartoon Super Sheets",
        d: "Cartoon Style Sheeps",
        ans: "ans1"
    },
    {
        question: "Q3: BS stands for?",
        a: "BOOTSTREEP",
        b: "BITESTRAP",
        c: "BITESTREEP",
        d: "BOOTSTRAP",
        ans: "ans4"
    },
    {
        question: "Q4: JS stands for?",
        a: "JAVASCRIPT",
        b: "JAVASUPER",
        c: "JORDENSHOS",
        d: "JUSTSCRIPT",
        ans: "ans1"
    }
];


const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer')

const showScore = document.querySelector('#showScore');
let questionCount = 0;
let score = 0;
const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerHTML = questionList.question;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}
loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    });

    return answer;
};
const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer === quizDB[questionCount].ans) {
        score++;
    };
    questionCount++;
    deselectAll();
    if (questionCount < quizDB.length) {
        loadQuestion();
    } else {
        showScore.innerHTML = `
        <h3> you scored ${score}/${quizDB.length}</h3>
        <button class="btn" onclick="location.reload()">Play Again</button>
        `;
        showScore.classList.remove('scoreArea');
    }
});