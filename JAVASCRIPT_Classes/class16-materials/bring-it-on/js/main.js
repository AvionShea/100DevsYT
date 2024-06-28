// *Variables*
// Create a variable and console log the value
let newVariable = "hello, world!";
console.log(newVariable);

// Create a variable, add 10 to it, and alert the value
let addTenVariable = 150;
addTenVariable += 10;
alert(addTenVariable);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
/*function subtractsFour(n1, n2, n3, n4){
    let subDifference = n1 - n2 - n3 - n4;
    alert(subDifference);
};
subtractsFour(200,10,20,30);*/

let subtractsFour = (n1, n2, n3, n4) => n1 - n2 - n3 - n4
alert(subtractsFour(200, 10, 20, 30));

// Create a function that divides one number by another and returns the remainder
/*function divideAndReturn(num1, num2) {
    let divideAndConquer = num1 / num2;

    return divideAndConquer;
};
*/

let divideAndReturn = (num1, num2) => num1 / num2

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
/*function addAndCompare(number1, number2) {
    let sum = number1 + number2;
    if (sum > 50) {
        alert("Jumanji!");
    };
};*/

let addAndCompare = (number1, number2) => number1 + number2 > 50 ? alert("Jumanji!") : number1 + number2


// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyAndAlert(d1, d2, d3) {
    let product = d1 * d2 * d3;
    if (product % 3 === 0) {
        alert("Zebra!");
    };
};
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function loopTheWord(word, number) {
    for (let i = 0; i <= number; i++) {
        console.log(word);
    };
};

loopTheWord("hello", 3);
