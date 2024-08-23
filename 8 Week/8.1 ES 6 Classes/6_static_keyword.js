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

    // stacic method
    static showMsg() {
        console.log('Hii Moin , How are you doing?');
        this.getDetails()

    }
}

v1 = new Vehicle('Fortuner', 'Red', 4);
// v1.showMsg()    // showMsg is not a function.

Vehicle.showMsg();          // Correct

// console.log(Vehicle);
