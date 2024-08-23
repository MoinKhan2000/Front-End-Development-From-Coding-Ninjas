function Vehicle(name, color, wheels) {
    this.name = name;
    this.color = color;
    this.wheels = wheels;
}

Vehicle.prototype.getVehDetails = function () {
    console.log(`Name:${this.name} : Color : ${this.color} Wheels : ${this.wheels}`);
}


function Car(name, color, wheels, brand, seats) {
    Vehicle.call(this, name, color, wheels)
    this.brand = brand;
    this.seats = seats;
}


Car.prototype = Object.create(Vehicle.prototype)
Car.prototype.getDetails = function () {
    console.log(`Name:${this.name} : Color : ${this.color} Wheels : ${this.wheels}, Seats : ${this.seats}`);
}

car = new Car('Fortuner', 'Black', 4, 'Toyota', 7)
car.getDetails()
car.getVehDetails()    // Error


console.log(car.__proto__);
vehi = new Vehicle('a', 's', 3)
console.log(vehi.__proto__)
