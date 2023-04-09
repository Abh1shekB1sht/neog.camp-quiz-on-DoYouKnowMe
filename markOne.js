var readlineSync = require('readline-sync');

var score = 0;
var one = 1;

var highScore = [{
  name: "Aayush",
  score: "3 point",
}, {
  name: "Rohan",
  score: "1 point",
}, {
  name: "kajal",
  score: "2 point",
}]

var questions = [{
  question: "\nWhat is my name?\n",
  answer: "Abhishek",
}, {
  question: "What is my favourite fruit?\n",
  answer: "Mango",
}, {
  question: "Where do I live?\n",
  answer: "Delhi",
}, {
  question: "What is my nationality?\n",
  answer: "Indian",
}, {
  question: "What is my favourite subject?\n",
  answer: "Maths",
}]

function quiz(question, answer) {
  var userName = readlineSync.question(question);
  if (userName === answer) {
    score = score + one;
    console.log("You are right!");
    console.log("Your score has a change of " + "+1" + "\n");
  } else {
    score = score - one;
    console.log("You are wrong!");
    console.log("Your score has a change of " + "-1" + "\n");
  }

}

var userinput = readlineSync.question("What is your name?\n");
console.log("Hello and Welcome! to the QUIZ " + userinput + "\nThis QUIZ has been made with theme of 'DO YOU KNOW ME' " + "\nI hope you enjoy the QUIZ.");

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  quiz(currentQuestion.question, currentQuestion.answer);
}



console.log("You scored a total of " + score + " point");

console.log("Thanks for trying out the QUIZ");

console.log("\n--------------------------------")

console.log("Checkout the scoreboard")

console.log("--------------------------------")

for (var j = 0; j < highScore.length; j++) {
  var currentScore = highScore[j];
  console.log(currentScore.name," : ", currentScore.score);
}

console.log("--------------------------------")

console.log("\nIf you scored higher. \nSend me a screenshot and I will update the scoreboard.")