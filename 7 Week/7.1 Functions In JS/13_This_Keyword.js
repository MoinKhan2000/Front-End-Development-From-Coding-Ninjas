// "use strict"

console.log(this);  // window object
console.log((() => this)());   // also returns the window object
// arrow functions do not have their own "this" property




var name = "moin khan"
console.log(window.name);       //moin khan

let name2 = "mohsin khan"
console.log(window.name2);   // undefined
console.log(this.name2);   // undefined



function checkThis() {
    console.log(this);  // window object without strinct mode but in strict mode it will be undefined.
}

checkThis()


console.clear()
const user1 = {
    userName: "Moin Khan",
    userAge: 12,
    work: function () {
        console.log(this);
    }
}
const user2 = {
    userName: "Moin Khan",
    userAge: 23,

}


user1.work()      // logs the user1 object 
user2.work = user1.work
user2.work()      // logs the user2 object



// Checking for the arrow functions.

"use strict"
const checkArrow = () => {
    console.log(this);      // giving window object even in strict mode.
}

checkArrow()

//! Arrow function doesn't have it's own this, it basically bound to the parent this.