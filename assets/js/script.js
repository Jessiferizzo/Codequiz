//array of questions and answers
var myQuestions = [
    {
      question: "Commonly used data types DO Not Include_______?",
      answers: {
        1: "strings",
        2: "booleans",
        3: "alerts",
        4: "numbers",

      },
      correctAnswer: 3
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
var myQuestionsIndex=0;
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
};
//loads quiz questions on question box from array 
const questionEl = document.querySelector("#question")
questionEl.textContent = myQuestions[0].question

//answers need IDs added to the li element, but this is an example of what it could look like after you add an ID
const answer1El = document.querySelector("#answer1");
answer1El.textContent = myQuestions[0].answers[1]
const answer2El = document.querySelector("#answer2");
answer2El.textContent = myQuestions[0].answers[2]
const answer3El = document.querySelector("#answer3");
answer3El.textContent = myQuestions[0].answers[3]
const answer4El = document.querySelector("#answer4");
answer4El.textContent = myQuestions[0].answers[4]

//when we select a choice we check for true or false (if TRUE submit score, if FALSE reduce time)

// the following line turns the HTMLCollection into a true JS array
let nextQuestionBtns = new Array(...document.getElementsByClassName('answer-choices') );

//attach listener to each choice button
nextQuestionBtns.forEach( function(button) {
  // here you can attach the listeners:
  button.onclick = function(){
      console.log("you clicked a choice!");
    // and here, you would check if this button is contained by the appropriate question
  }
})

if (nextQuestionBtns=== myQuestions[0].correctAnswer[0]){
    console.log("that's right");
};


/*var checkAnswer= function(event){
console.log(event.trigger)
};
function checkAnswer (){

};*/

/*load next question when they pick an answer 
function currentQuestion (){

};*/



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
