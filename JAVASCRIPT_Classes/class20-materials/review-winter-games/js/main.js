//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

// forEach example
function evenNumberArray(arr) {
    let newArray = [];
    arr.forEach((element) => {
        if (element % 2 === 0) {
            newArray.push(element);
        };
    });

    return newArray;
};
console.log(evenNumberArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


// for Loop example
function evenArray(num) {
    let evenNumArr = [];
    for (let i = 1; i <= num.length; i++) {
        if (i % 2 === 0) {
            evenNumArr.push(i)
        };
    };
    return evenNumArr
};
console.log(evenArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
