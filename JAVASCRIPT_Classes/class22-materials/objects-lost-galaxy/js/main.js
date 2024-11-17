//Create a mouse object that has four properties and three methods

let mouse = {
    brand: "Logitech",
    color: "Pink",
    size: "Small",
    purpose: "Gaming",
    model: "Lift",
};

mouse.rightClick = function () {
    console.log("right click");
};

mouse.leftClick = function () {
    console.log("left click");
};

mouse.scroll = function () {
    console.log("Zoom");
};

function Mouse(brand, color, size, purpose) {
    this.brand = brand,
        this.color = color,
        this.size = size,
        this.purpose = purpose

    this.rightClick = function () {
        console.log("right click");
    };

    this.leftClick = function () {
        console.log("left click");
    };

    this.scroll = function () {
        console.log("Zoom");
    };
}

let logitech = new Mouse("LogiTech", "Pink", "Medium", "Ergonomic")
let dell = new Mouse("Dell", "Black", "Small", "Convenience")
