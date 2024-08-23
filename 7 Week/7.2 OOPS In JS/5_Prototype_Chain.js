// console.log(car.__proto__); // Object (top one)
// console.log(Object.__proto__); //

function Car(title) {
    this.title = title;
}

function getCarName() {
    console.log(`${this.title} is the name of the car`)
}

Car.prototype.getCarName = getCarName;
let car = new Car('Rolls Roys')
console.log(car.getCarName());

// Adding one function to the prototype of String

name = "Moin Khan"
function makeStringCapital(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}
String.prototype.makeStringCapital = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
};
console.log(name.makeStringCapital());


function Person(name) {
    this.name = name;
}
Person.prototype.age = 30
const john = new Person('john')
john.__proto__.age = 40
console.log(john.age);
console.log(Person.prototype.age);

