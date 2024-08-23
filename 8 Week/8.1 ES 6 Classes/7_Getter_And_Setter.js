
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    //? Normal way 
    // getDiameter() {
    //     console.log(this.radius * 2);
    // }

    // using get and set
    get diameter() {
        return this.radius * 2;
    }

    set diameter(newDiameter) {
        this.radius = newDiameter / 2;
    }
}



circle = new Circle(4);
console.log(circle.radius);     // 4
// circle.getDiameter();        // 8 
console.log(circle.diameter);   // 8

circle.diameter = 16            // We cannot do this for now; we use set method for this
console.log(circle.diameter); // 8


//~ Now 

circle.diameter = 20
console.log(circle.diameter); // 20
