//Create a function that takes in an array of numbers. Multiply each number together and alert the product.

function multiplyArray(arr) {
    let product = 1;
    arr.forEach((element) => product *= element);
    alert(product);
};

multiplyArray([10, 2, 3]);
