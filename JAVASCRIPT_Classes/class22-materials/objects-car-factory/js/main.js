//Create a car object that has four properties and three methods

//Original constructor
function MakeCar(carMake, carModel, carColor, numOfDoors) {
    this.make = carMake,
        this.model = carModel,
        this.color = carColor,
        this.doors = numOfDoors

    this.alarm = function alarm() {
        alert("ALERT! ALERT! ALERT!")
    }

    this.doorLock = function lockDoors() {
        alert(`Locked all ${this.numOfDoors} doors!`)
    }

    this.honk = function honk() {
        alert("BEEP BEEP MOTHERPUCKER!")
    }
}

//Class constructor
class MakeCar {
    constructor(carMake, carModel, carColor, numOfDoors) {
        this.make = carMake,
            this.model = carModel,
            this.color = carColor,
            this.doors = numOfDoors

        this.alarm = function alarm() {
            alert("ALERT! ALERT! ALERT!")
        }

        this.doorLock = function lockDoors() {
            alert(`Locked all ${this.numOfDoors} doors!`)
        }

        this.honk = function honk() {
            alert("BEEP BEEP MOTHERPUCKER!")
        }
    }
}

let hondaAccord = new MakeCar("Honda", "Accord", "Black", 4)
let bmwM5 = new MakeCar("BMW", "M5", "Isle of Man", 4)
let alfaRomero = new MakeCar("Alfa Romeo", "Giulia Quadrifoglio", "Verde Fangio Metallic", 4)