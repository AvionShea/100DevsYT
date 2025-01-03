// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = "Ginger Beer";
favDrink = favDrink.trim();
console.log(favDrink);

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let strOfMultipleWords = "This is a string of multiple words. Does it include the word apple?"
console.log(strOfMultipleWords.includes("apple"));

if (strOfMultipleWords.search("apple") !== -1) {
    console.log("yes");
} else {
    console.log("no");
};

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
const rockPaperScissors = () => {
    let random = Math.random() * 100;

    if (random < 33) {
        return "rock";
    } else if (random < 66) {
        return "paper";
    } else {
        return "scissors"
    };
};

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
const whoWon = (playerChoice) => {
    let botChoice = rockPaperScissors();

    if ((playerChoice === "rock" && botChoice === "scissors") || (playerChoice === "paper" && botChoice === "rock") || (playerChoice === "scissors" && botChoice === "paper")) {
        console.log("Winner!");
    } else if (playerChoice === botChoice) {
        console.log("Tied!");
    } else {
        console.log("Loser!");
    };
};

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

const multipleGames = (arr) => arr.forEach((choice) => whoWon(choice));

