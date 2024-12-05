//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let sum = [5, 20, 10, 30];
sum = sum.reduce((a, b) => a + b, 0);
alert(sum);

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
const squared = (arr) => arr.map((element) => element ** 2)

//Create a function that takes string
//Print the reverse of that string to the console
const reversedStr = (str) => console.log(str.split("").reverse().join(""))



//Create a function that takes in a string
//Alert if the string is a palindrome or not
const isPalindromeCheck = (str) => alert(str === str.split("").reverse().join(""))

isPalindromeCheck("racecar")
isPalindromeCheck("lol")
isPalindromeCheck("leon noel")
isPalindromeCheck("math")