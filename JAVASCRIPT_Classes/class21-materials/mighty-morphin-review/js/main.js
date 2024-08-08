// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let favHoliday = "Halloween";
favHoliday = "Christmas";
favHoliday = favHoliday.toUpperCase();
console.log(favHoliday);

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let lastThree = "Hurricane weather is the best";
lastThree = lastThree.substring(lastThree.length - 3);
alert(lastThree);


// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.

let subFiveAndAbs = (n1, n2, n3, n4, n5) => {
    let diff = 100 - n1 - n2 - n3 - n4 - n5;
    alert(Math.abs(diff));
}
subFiveAndAbs(30, 2, 4, 85, 25);

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.

let logHighAndLow = (n1, n2, n3) => {
    let min = Math.min(n1, n2, n3);
    let max = Math.max(n1, n2, n3);

    console.log(`The lowest number is ${min} and the highest number is ${max}`);
};

logHighAndLow(1548, 854, 7418);


// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

const headsOrTails = () => (Math.random() < 0.5) ? "heads" : "tails";


//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.

let resultOfHeadsOrTails = (x) => {
    for (let i = 1; i <= x; i++) {
        let result = headsOrTails();
        console.log(result);
    };
};

resultOfHeadsOrTails(1);
