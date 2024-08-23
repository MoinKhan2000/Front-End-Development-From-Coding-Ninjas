function VehicleNormal(name, color, wheels) {
    this.color = color;
    this.name = name;
    this.wheels = wheels;
    this.getDetails = () => {
        console.log(`${this.name} is ${this.color} in color. It has ${this.wheels} wheels.`);

    }
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
    getDetails = () => {
        console.log(`${this.name} is ${this.color} in color. It has ${this.wheels} wheels.`);

    };
}


// class declaration can also be done as same as function declaration. 
const Bus = class {
    model;
    chechis;
    totalSeats;

    constructor(model, chechis, totalSeats) {
        this.model = model;
        this.chechis = chechis;
        this.totalSeats = totalSeats;
    }

    getDetails() {
        console.log(`The bus model is ${this.model}.`);
    }
}


car = new VehicleUsingClass('Lamborgini', 'Black', '4')
car.getDetails() // Lamborgini is


bus = new Bus('LaxmiNarayan', "83Xj", 40)
bus.getDetails()
console.log(Bus);


class Person {
    constructor() {
        this.name = 'John'
    }
}

class Person {
    name = 'John'
}


//! Wrong
// class Person{
//     this.name = 'John'
// }

//! Wrong
// class person(name){
//     this.name = name
// }