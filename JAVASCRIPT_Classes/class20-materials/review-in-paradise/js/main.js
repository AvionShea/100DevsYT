// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value

let favFood;

favFood = "butter chicken";

alert(favFood);

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)

let secondCharacter = "This is a string!";

//alert(secondCharacter[1]);
alert(secondCharacter.charAt(1));


// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.

let threeNumbers = (n1, n2, n3) => {
    let product = (n1 / n2) * n3;
    alert(product);
}

threeNumbers(2, 2, 3);


// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.

function cubeRootIt(num1) {
    console.log(Math.cbrt(num1));
};

cubeRootIt(64);


// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"

let summer = (month) => {
    let monthLowerCase = month.toLowerCase()
    if (monthLowerCase === "june" || monthLowerCase === "july" || monthLowerCase === "august") {
        alert("YAY!!");
    } else {
        alert("Booo!");
    };
};


//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.

function skip5(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 5 !== 0) {
            console.log(i);
        };
    };
};
