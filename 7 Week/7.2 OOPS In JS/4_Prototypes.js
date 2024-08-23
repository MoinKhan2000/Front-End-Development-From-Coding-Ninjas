function Movie(title) {
    this.title = title
}

const movie1 = new Movie('DDLJ')
console.log(movie1);
console.log(movie1.__proto__);  //constructor
movie1.genre = 'biography'
console.log(movie1);
console.log(movie1.__proto__); //constructor);


let movie2 = new Movie('Dilwale')
console.log(movie2.__proto__); //constructor
console.log(movie2)
console.log(movie2.__proto__.__proto__);    //Object
console.log(movie2.__proto__.__proto__.__proto__);    //null





// Object -> Movie -> movie1
//                 -> movie2

// movie2 can access all the prototypes of Movie and Object known as prototypal inheritance.


function Game(name, platform) {
    this.name = name
    this.platform = platform
}
const fifa = new Game('Fifa 23', "PlayStation")
console.log(fifa.__proto__ === Game.prototype);
// console.log(fifa.__proto__, Game.__proto__);
console.log(fifa.__proto__.__proto__ === Object.prototype);

console.log(fifa.__proto__.__proto__);

console.log(Object.prototype);

