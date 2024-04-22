// *Variables*
// Declare a variable, assign it a value, and alert the value
let declaredVariable = "$138K";
alert(declaredVariable);

// Create a variable, divide it by 10, and console log the value
let variableDividedByTen = 50;
let newVariable = variableDividedByTen / 10;
console.log(newVariable);

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function productOfThreeNumbers(n1, n2, n3){
    let product = n1 * n2 * n3;
    alert(product);
};

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function takesFourNumbers(num1, num2, num3, num4){
    let addFirstTwo = num1 + num2;
    let subNextTwo = num3 - num4;

    console.log(addFirstTwo, subNextTwo);
};

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function greaterThanTwentyFive(number1, number2, number3){
    let mathSolution = ((100 + number1) - number2) / number3;

    if (mathSolution > 25){
        console.log("WE HAVE A WINNA!");
    };
};

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function dayOfWeek(day){
    day = day.toLowerCase();
    if(day === "saturday" || day === "sunday"){
        alert("Weekend!");
    }else if(day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "friday"){
        alert("week day")
    }else{
        alert("Try again!")
    };
};

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3

function loopByThree(number){
    for(i = 1; i <= number; i+=3){
        console.log(i);
    };
};