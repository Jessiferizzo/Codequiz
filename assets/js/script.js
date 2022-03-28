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
var count = 75;

//constants declared
var startPage = document.querySelector("#start-page");
var quizBox = document.querySelector("#quiz-box");
var timer = document.querySelector("header .timer");
var timeCount = document.querySelector(".timer");
var answerChoices = document.getElementById(".answer-choices");


//event click button starts the quiz
function startQuiz (){
    console.log("quiz begins!");

    var setQuestion=document.querySelector("#quiz-box");
    setQuestion.textContent= myQuestions;
    
    //loop through each question and answer array and set to question-box
    /*for(i=0;i<myQuestionsIndex.length;i++);{
        function setQuestion ()
    }*/

//starting quiz starts timer
var interval = setInterval(function(){
  console.log("timer starts");
  document.querySelector("header .timer").innerHTML=count;
  count--;
  if (count === 0){
    clearInterval(interval);
  }
}, 1000);

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
        $( "#quiz-box" ).show();
    });
});
