//! Not related to this topic
// function Car() {
//     this.brand = "Rolls Royce";
//     this.name = "Car";
//     this.color = "Black";
// }

// Car.prototype.getDetails = function () {
//     console.log(`This is a ${this.name} of ${this.brand} company.`);
// };

// let car = new Car();
// car.getDetails();

//! Your topic starts here.....

let car = {
    name: "Car",
    color: "Black",
    getDetails(brand, seats) {
        console.log(`This is a ${this.color} ${this.name} of ${brand} company and It has ${seats} seats.`);
    }
}

let bus = {
    name: "bus",
    color: "mehroon"
}

car.getDetails('Fortuner', 4)

car.getDetails.call(bus, "Toyota", 60)      //(towhich , first parameter,second parameter)
car.getDetails.apply(bus, ["Toyota", 60])      //(towhich , [first parameter,second parameter])
const vehicle = car.getDetails.bind(bus)
vehicle("Honda", 50)
vehicle('TATa', 120)


car = {
    model: "Model 5",
    startEngine: function () {
        console.log(`${this.model}'s engine started!`);
    }
}


let startCar = car.startEngine.bind(car);
car.startCar