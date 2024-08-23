class Vehicle {
    // Properties - optional one.
    name;
    color;
    wheels;

    // constructor
    constructor(name, color, wheels) {
        this.color = color;
        this.name = name;
        this.wheels = wheels;
    }

    // methods 
    getDetails = () => {
        console.log(`${this.name} is ${this.color} in color. It has ${this.wheels} wheels.`);

    };
}


class Car extends Vehicle {
    constructor(name, color, brand, purpose) {
        super(name, color, 4)
        this.brand = brand;
        this.purpose = purpose;
    }
    getDetails = () => {
        // Vehicle.getDetails();
        // console.log("getDetails from Car");
        // console.log(`This car is made by ${this.brand}. Its main use is for ${this.purpose}.`);
        return Car.wheels

    }
}

car1 = new Car('Fortuner', 'Black', 'Toyota', 'For Luxury Traverllings')
car1.getDetails()