//Create a function that takes in an array of numbers. Multiply each number together and alert the product.

//forEach Example
function multiplyArray(arr) {
    let product = 1;
    arr.forEach((element) => product *= element);
    alert(product);
};

multiplyArray([10, 2, 3]);

//for loop Example
function mutltiArray() {
    let product = 1
    for (let i = 0; i < arr.length; i++) {
        product *= arr[i];
    };
    alert(product);
};