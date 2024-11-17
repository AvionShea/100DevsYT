//Create a car object that has four properties and three methods

//Original constructor
function MakeCar(carMake, carModel, carColor, numOfDoors) {
    this.carMake = carMake,
        this.carModel = carModel,
        this.carColor = carColor,
        this.numOfDoors = numOfDoors

    this.carAlarm = function alarm() {
        alert("ALERT! ALERT! ALERT!")
    }

    this.carDoorLock = function lockDoors() {
        alert(`Locked all ${this.numOfDoors} doors!`)
    }

    this.honk = function honk() {
        alert("BEEP BEEP MOTHERPUCKER!")
    }
}

//Class constructor
class MakeCar {
    constructor(carMake, carModel, carColor, numOfDoors) {
        this.carMake = carMake,
            this.carModel = carModel,
            this.carColor = carColor,
            this.numOfDoors = numOfDoors

        this.carAlarm = function alarm() {
            alert("ALERT! ALERT! ALERT!")
        }

        this.carDoorLock = function lockDoors() {
            alert(`Locked all ${this.numOfDoors} doors!`)
        }

        this.honk = function honk() {
            alert("BEEP BEEP MOTHERPUCKER!")
        }
    }
}
