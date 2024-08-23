class Vehicle {
    constructor(brand) {
        wheels = 4
        this.brand = brand
    }
    startEngine() {
        console.log('Engine started');
    }
}
class Car extends Vehicle {
    constructor(brand, model) {
        super(brand)
        this.model = model
    }

    getWheels() {
        return this.wheels
        // Code to get the wheels from the parent class
    }
}

const myCar = new Car("myCar", "Camry")
console.log(myCar.getWheels());
