//array of questions and answers
var currentQuestionsIndex=0

var currentQuestions = [
    {
      question: "Commonly used data types DO Not Include_______?",
      answers: {
        a: "strings",
        b: "booleans",
        c: "alerts",
        d: "numbers",

      },
      correctAnswer:"d"
    },
    {
      question: "The condition in an if / else statement is enclosed with _______?",
      answers: {
        1: "quotes",
        2: "curly brackets",
        3: "parenthesis",
        4: "square brackets",

      },
      correctAnswer: 3
    },
    {
      question: "Arrays in JavaScript can be used to store_______?",
      answers: {
        1: "numbers and strings",
        2: "other arravs",
        3: "booleans",
        4: "all of the above",

      },
      correctAnswer:4
    },
    {
        question: "String values must be enclosed within _______ when being assigned to variables.",
        answers: {
            1: "commas",
            2: "curly brackets",
            3: "quotes",
            4: "parenthesis",

        },
        correctAnswer:3
      },
      {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: {
            1: "JavaScript",
            2: "terminal/bash",
            3: "for loops",
            4: "console.log",
              
        },
        correctAnswer:3
      },
  ];
//variables declared 
var score=0;
var count= 75;

//constants declared
var startPage = document.querySelector("#start-page");
var quizBox = document.querySelector("#quiz-box");
var timeCount = document.querySelector(".timer");
var answerChoices = document.getElementById(".answer-choices");
var startBtn= document.getElementById("#start-btn");

//event click button starts the quiz
function startQuiz (){
    console.log("quiz begins!");
//starting quiz starts timer
var timer = document.querySelector("header .timer");
function countdown() {
    var timeLeft = 75;
    console.log ("timer starts");
    
    var timeInterval = setInterval(function () {
    timer.textContent = timeLeft 
    timeLeft--;
        if (timeLeft===0){
            console.log("Game over");
            timer.textContent = '';
            clearInterval(timeInterval);
        }
    }, 1000);
}
countdown ();


//loads first quiz questions on question box from array 
const questionEl = document.querySelector("#question")
questionEl.textContent = currentQuestions[0].question

//make question array display in HTML
const answer1El = document.querySelector("#answer1");
answer1El.textContent = currentQuestions[0].answers[1]
console.log(currentQuestions[0]);
const answer2El = document.querySelector("#answer2");
answer2El.textContent = currentQuestions[0].answers[2]
const answer3El = document.querySelector("#answer3");
answer3El.textContent = currentQuestions[0].answers[3]
const answer4El = document.querySelector("#answer4");
answer4El.textContent = currentQuestions[0].answers[4] 
};

function displayQuestion(){
//loads quiz questions on question box from array 

const questionEl = document.querySelector("#question")
questionEl.textContent = currentQuestions[currentQuestionsIndex].question

//make question array display in HTML and make into buttons
const answer1El = document.querySelector("#answer1");
answer1El = document.createElement("button");
console.log("button 1 made");
answer1El.textContent = currentQuestions[currentQuestionsIndex].answers[1]
const answer2El = document.querySelector("#answer2");
answer2El = document.createElement("button");
console.log("button 2 made");
answer2El.textContent = currentQuestions[currentQuestionsIndex].answers[2]
const answer3El = document.querySelector("#answer3");

currentQuestionsIndex++
console.log(currentQuestionsIndex);
}


function addEventListeners(event) {
var elementClicked = event.target;
const answerButtons = document.querySelector(".answer-choices");
answerButtons= document.createElement("button");
console.log("you clicked a button!");
elementClicked= function(){
function checkCorrectAnswer(elementClicked) {
        if (elementClicked.textContent === correctAnswer){
         console.log("correct!");
         console.log(currentQuestionsIndex.correctAnswer);
        //add points to total score 
         } else {
            console.log("incorrect");
        timeLeft-15
        };   
displayQuestion(); 
console.log("question shows!");
checkCorrectAnswer();
console.log("checked for answer!");
    }
}
}



//input your name to save score to local storage 
/*$("#task-form-modal .btn-primary").click(function() {

});*/

//add event listener to start button 
$("#start-btn").click(function () {
    console.log("you clicked it!");
    $("#start-page").remove();
    console.log("page stolen");
    document.querySelector("#quiz-box").style.display = "block";
    console.log("returned questions box!");
    startQuiz();
    console.log ("quiz started!");
})
