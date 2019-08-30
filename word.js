var Letter = require("./letter.js");

var sports = [
    "tennis",
    "badminton",
    "swimming",
    "cycling",
    "running"
];
var word = "";
// var answerArray = [];

var Word = function(answerArray, ) {

    this.guessWord = function() {
        var word = sports[Math.floor(Math.random() * sports.length)];
        var answerArray = [];
        for (var i = 0; i < word.length; i++) {
            answerArray[i] = "_";
        console.log(answerArray.join(" "));
        }
    };
}