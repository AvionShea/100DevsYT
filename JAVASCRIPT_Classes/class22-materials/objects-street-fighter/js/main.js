//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function MakeStreetFighter(name, punch, kick, block, specialMove) {
    this.name = name;
    this.punch = punch;
    this.kick = kick;
    this.block = block;
    this.specialMove = specialMove;

    this.greet = function () {
        console.log("You don't want none of this!");
    };
    this.taunt = function () {
        console.log(`You can handle my ${this.specialMove}!`)
    };
    this.dodge = function () {
        console.log("Whooooop, missed me!");
    };
};

let sky = new MakeStreetFighter("Sky", "high", "shin", "face", "cobra strike");