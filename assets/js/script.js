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

//constants declared
var startPage = document.querySelector("#start-page");
var quizBox = document.querySelector("#quiz-box");
var highScore = document.querySelector(".view-score");
var option_list = document.querySelector(".option_list");
var timer = document.querySelector("header .timer");
var timeText = document.querySelector(".timer");
var timeCount = document.querySelector(".timer");
var answerChoices = document.getElementById(".answer-choices");


//event click button starts the quiz
function startQuiz (){
    console.log("quiz begins!");

for(i=0;i<myQuestionsIndex.length;i++);{
    var myQuestions=document.querySelector("#quiz-box");
    myQuestions.textContent= userQuestion;
}

//starting quiz starts timer
    console.log("timer starts");
    counter = setInterval(timer, 1000);
    function timer(){
        let time=75
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if (timeCount===0){
            console.log("Game over");
            clearInterval(counter);
        }
    };
};



//when we select a choice we check for true or false (if TRUE submit score, if FALSE reduce time)
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
$( "#start-btn" ).click(function() {
    console.log("you clicked it!");
});
var startBtn = document.querySelector("#start-btn");
startBtn.addEventListener('click', startQuiz);
$(document).ready(function() {
    $("#start-btn").click(function() {
        $("#start-page").remove();
    });
});

