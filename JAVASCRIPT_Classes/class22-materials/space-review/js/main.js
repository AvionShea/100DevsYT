//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

let arrNum = [1, 94, 742, 7549, 6547];

let sum = arrNum.reduce((a, b) => a + b, 0);

alert(sum);

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

const squared = (arr) => arr.map((element) => element ** 2);

//Create a function that takes string
function reverse(string) {
    let reversed = string.split("").reverse().join("");
    console.log(reversed);
};
reverse("hello");

//Print the reverse of that string to the console

//Create a function that takes in a string
const isPalindrome = (str) => {
    let reversed = str.split("").reverse().join("");

    if (reversed == str) {
        alert("true")
    } else {
        alert("false")
    };
};

isPalindrome("racecar")
//Alert if the string is a palindrome or not
