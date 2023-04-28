const questions = [
    {
        question: "What are RGB's main colors?",
        answers: [
            {text: "Red, Blue, Green", correct: true},
            {text: "Yellow, Purple, Baby Blue", correct: false},
            {text: "White, Blue , Purple", correct: false},
            {text: "Green, White, Yellow", correct: false},
        ]
    },
    {
        question: "Which animal is known for its long neck?",
        answers: [
            {text: "Ant Eater", correct: false},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: true},
            {text: "Sloths", correct: false},
        ]
    },
    {
        question: "Which is the Best Coding Bootcamp?",
        answers: [
            {text: "Coding Dojo", correct: false},
            {text: "BrainStation", correct: false},
            {text: "University of Miami", correct: true},
            {text: "Ironhack", correct: false},
        ]
    },
    {
        question: "What does the HTML consist of?",
        answers: [
            {text: "Classes/ID's", correct: false},
            {text: "Open/Closed tags", correct: false},
            {text: "elements", correct: false},
            {text: "All of The Above", correct: true},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answerbuttons");
const nextButton = document.getElementById("nextbtn");
const startButton = document.getElementById("startbutton");

let currentQuestionIndex = 1
let score = 75;



// need to figure out how to run showQuestion function everytime currentQuestionIndex increases
function showQuestion(){
    questionElement.innerHTML = questions[currentQuestionIndex].question

    for (i=0; i < questions[currentQuestionIndex].answers.length; i++ ){
        var button = document.createElement("button");
        button.innerHTML = questions[currentQuestionIndex].answers[i].text
        answerButton.appendChild(button);
        button.addEventListener("click", function() {
            currentQuestionIndex++
            showQuestion();
        })
    }
// add logic to increase score when user gets correct answer and remove time when incorrect
    

    
}

function isCorrect() {
    
}

function startQuiz(){
    startButton.style.display = "none"
    for(var i = 0; i<answerButton.children.length; i++){
        answerButton.children[i].setAttribute("class","btn")
    }
    showQuestion();

};



startButton.addEventListener("click",startQuiz)
