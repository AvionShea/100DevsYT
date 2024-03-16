// *Variables*
// Create a variable and console log the value
let pop = "popcorn";
console.log(pop);

// Create a variable, add 10 to it, and alert the value
let addTen = 132
addTen += 10;
alert(addTen);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractsFourNumbers(number1, number2, number3, number4){
    let difference = number1 - number2 - number3 - number4;

    alert(difference);
};

// Create a function that divides one number by another and returns the remainder
function divideAndReturns(digit1, digit2){
    let remainder = digit1 / digit2;

    return remainder;
};

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function greaterThanFifty(num1, num2){
    let sum = num1 + num2;

    if(sum > 50){
        alert('Jumanji');
    };
};
    greaterThanFifty(50, 5);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
    function multiplyByThree(digits1, digits2, digits3){
        let product = digits1 * digits2 * digits3;
        if(product%3 === 0){
            alert("Zebra");
        };
    };

    multiplyByThree(3,3, 3);