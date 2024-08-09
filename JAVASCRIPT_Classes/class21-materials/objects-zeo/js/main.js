//Create a stopwatch object that has four properties and three methods

let stopwatch = {
    shape: "round",
    color: "black",
    time: "12",
    brand: "Garmin",
};

stopwatch.start = function () {
    console.log("Starting");
};

stopwatch.stop = function () {
    console.log("Stopping");
};

stopwatch.sayBrand = function () {
    console.log(this.brand);
};
