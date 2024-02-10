// *Variables*
// Create a variable and console log the value

let bean = 36;
console.log(bean);

// Create a variable, add 10 to it, and alert the value

let addTen = 94;
addTen += 10;
alert(addTen);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subFourAndAlert(num1, num2, num3, num4) {
    let newNumber = num1 - num2 - num3 - num4;
    alert(newNumber);
}

// Create a function that divides one number by another and returns the remainder
function divideAndRemain(n1, n2) {
    let divideNumber = n1 / n2;
    return divideNumber;
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function greaterThanFifty(nums1, nums2) {
    let sum = nums1 + nums2;
    if (sum > 50) {
        alert("Jumanji");
    }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function divisibleByThree(bob, brittany, brandon) {
    let multiples = bob * brittany * brandon;
    if (multiples % 3 === 0) {
        alert("ZEBRA");
    }
}