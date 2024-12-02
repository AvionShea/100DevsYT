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
    console.log(`You can't handle my ${this.specialMove}!`);
  };
  this.dodge = function () {
    console.log("Whooooop, missed me!");
  };
}

let sky = new MakeStreetFighter("Sky", "high", "shin", "face", "cobra strike");
let moonlight = new MakeStreetFighter(
  "Moonlight",
  "throat",
  "stomach",
  "head",
  "super saiyan"
);
let flair = new MakeStreetFighter(
  "Flair Galore",
  "gut",
  "knee",
  "neck",
  "purple nurple"
);

class StreetFighter {
  constructor(name, punch, kick, block, catchPhrase, specialMove) {
    this.name = name;
    this.punch = punch;
    this.kick = kick;
    this.block = block;
    this.catchPhrase = catchPhrase;
    this.specialMove = specialMove;

    this.welcome = function () {
      console.log(`Welcome to ${this.name}'s world!`);
    };
    this.catchPhrase = function () {
      console.log(`Psst. ${this.catchPhrase}!`);
    };
  }
}

let sparkle = new StreetFighter(
  "Sparkle",
  "side",
  "throat",
  "You thought",
  "backflip"
);
