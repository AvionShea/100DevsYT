//Create an array of movie titles. Loop through the array and each element to the h2.
let arrayOfMovies = ["Saw", "Lion King", "Dracula", "Smurfs", "Meet the Browns"];
let list = document.querySelector("#display");

for (let i = 0; i < arrayOfMovies.length; i++) {
    list.innerText += arrayOfMovies[i];
};


//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let arrayOfNumbers = [32, 57, 91, 105, 124, 137];

arrayOfNumbers.forEach((item, index) => {
    arrayOfNumbers[index] = item + 3
})

//Find the average of all the numbers from question two
let sum = 0

for (let i = 0; i < arrayOfNumbers.length; i++) {
    sum += arrayOfNumbers[i]
}
console.log(sum / arrayOfNumbers.length)
