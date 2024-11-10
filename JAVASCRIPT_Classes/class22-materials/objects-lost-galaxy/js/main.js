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
}

let logitech = Mouse("LogiTech", "Pink", "Medium", "Ergonomic")
let dell = Mouse("Dell", "Black", "Small", "Convenience")
