// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
const str = "This is a string?";
//original
function question(str) {
    if (str.endsWith("?")) {
        alert(str);
    };
};
console.log(question(str))

//solved example
alert(str.endsWith("?"))

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let multipleWords = "I am looking for jr. dev positions!"
console.log(multipleWords.replaceAll("jr. dev", "software engineer"))

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors() {
    let choice = Math.random() * 100;
    if (choice < 33) {
        return "rock";
    } else if (choice < 66) {
        return "paper";
    } else {
        return "scissors";
    };
};

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function checkWin(playerChoice) {
    let botChoice = rockPaperScissors();
    if (playerChoice === "rock" && botChoice === "scissors" || playerChoice === "scissors" && botChoice === "paper" || playerChoice === "paper" && botChoice === "rock") {
        console.log("You Win!")
    } else if (playerChoice === botChoice) {
        console.log("Draw!");
    } else {
        console.log("Yous Lose!");
    };
};

console.log(checkWin("scissors"))

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
const multipleGames = (arr) => arr.forEach((selection) => checkWin(selection));

console.log(multipleGames(["paper", "rock", "scissors"]));
