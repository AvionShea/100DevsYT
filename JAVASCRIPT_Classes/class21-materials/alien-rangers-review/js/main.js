//Arrays

//Create an array of tv shows. Loop through and print each show to the console

let tvShows = ["Tales of the Crypt", "American Horror Stories", "The First 48"];

tvShows.forEach((show) => {
    console.log(show);
});

//Create an array of numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Return a new array of numbers that includes every even number from the previous Arrays

let onlyEvens = (arr) => arr.filter(num => num % 2 === 0)
console.log(onlyEvens(numbers))

//Create a function that takes in an array of numbers
function sumSecondLowAndHigh(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    alert(sortedArr[1] + sortedArr[sortedArr.length - 2]);
}

sumSecondLowAndHigh([12, 54, 34, 6, 8]);
//Alert the sum of the second lowest and the second highest number
