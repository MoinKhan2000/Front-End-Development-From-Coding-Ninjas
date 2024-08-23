function VehicleNormal(name, color, wheels) {
    this.color = color;
    this.name = name;
    this.wheels = wheels;

    //? In First Case
    // this.getDetails = () => {
    //     console.log(`${this.name} is ${this.color} in color. It has ${this.wheels} wheels.`);
    // }

}
VehicleNormal.prototype.getDetails = () => {
    console.log(`${this.name} is ${this.color} in color. It has ${this.wheels} wheels.`);
}

class VehicleUsingClass {
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
    getDetails() {
        console.log(`${this.name} is ${this.color} in color. It has ${this.wheels} wheels.`);

    };
}

// v1 = new VehicleUsingClass('Bus', 'Red', '40')
// v1.getDetails();
// console.log(v1.hasOwnProperty("getDetails"));    //! false

// v1 = new VehicleNormal('Bus', 'Red', '40')
// v1.getDetails();
// console.log(v1.hasOwnProperty("getDetails"));   //!true - we need to make it false some how?


v1 = new VehicleNormal('Bus', 'Red', '40')
v1.getDetails();
console.log(v1.hasOwnProperty("getDetails"));   //? false