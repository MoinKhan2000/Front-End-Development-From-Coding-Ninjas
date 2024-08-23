class VehicleUsingClass {
    // Public Properties - optional one.
    name;
    color;
    wheels;

    // Private Properties - mandetory
    #regNumber;

    // constructor
    constructor(name, color, wheels, regNumber) {
        this.color = color;
        this.name = name;
        this.wheels = wheels;
        this.#regNumber = regNumber;
    }

    // Public  methods 
    getDetails() {
        console.log(`${this.name} is ${this.color} in color. It has ${this.wheels} wheels. It's registration number is ${this.#regNumber}`);
        this.#getName() // Can be called in public 
    };

    // Private methods
    #getName() {
        console.log(`${this.name} `);
    }
}

car = new VehicleUsingClass('totyota', 'red', 'four', "MP34XUV")
car.getDetails()
car.wheels = 28     // This should not be there
car.getDetails()

// car.#regNumber = 23;    // Error
console.log(car);

// car.#getName() // Error