// "use strict"

var a = 10;
let b = 20;

var a = 30     // we can re declare var declared variables.
// let b = 40 // Cannot redeclare block-scoped variable 'b'.t

var x = 10;
let x = 20
console.log(x)


function outer() {
    let x = 10;
    if (true) {
        let y = 20;
        var z = 30
        console.log(x + y + z)
    }
    console.log(x + y + z)
}