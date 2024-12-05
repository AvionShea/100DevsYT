//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods

class ProSkater {
    constructor(name, gender, boardColor, gear, specialMove) {
        this.name = name
        this.gender = gender
        this.boardColor = boardColor
        this.gear = gear
        this.specialMove = specialMove

        this.skateMove = function () {
            console.log(`Don't make me use my ${this.specialMove}!`);
        };
        this.fight = function () {
            console.log("high kick");
        };
        this.block = function () {
            console.log("face block");
        };
    };
};

let bob = new ProSkater("Bob", "Male", "Pink", true, "Backflip");
let summer = new ProSkater("Summer", "Female", "Peach", true, "Kickflip");