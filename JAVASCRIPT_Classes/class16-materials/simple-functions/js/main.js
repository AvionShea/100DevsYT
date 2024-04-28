//---Easy
//create a function that subtracts two numbers and alerts the difference
function easySubtract(n1, n2) {
    let subtractValue = n1 - n2;
    alert(subtractValue);
};

//create a function that divides three numbers and console logs the quotient
function logsQuotient(num1, num2, num3) {
    let divide = num1 / num2 / num3;
    console.log(divide);
};

//create a function that multiplys three numbers and returns the product
function multipliesThree(number1, number2, number3) {
    let product = number1 * number2 * number3;
    return product;
};

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function tooMuchGoingOn(d1, d2, d3) {
    let firstAdd = d1 + d2;
    let remainder = firstAdd / d3;

    return remainder;
}

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function whatIsHappening(digit1, digit2, digit3, digit4) {
    let product = digit1 * digit2;

    if (product > 100) {
        let sum = product += (digit3 + digit4);
        console.log(sum);
    } else if (product < 100) {
        let subtraction = product -= (digit3 - digit4);
        console.log(subtraction);
    } else if (product == 100) {
        let remainder = (digit1 * digit2 * digit3) / digit4;
        alert(remainder);
    };
}