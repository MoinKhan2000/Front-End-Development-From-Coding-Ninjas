// Function Ecpression
var sum2 = function (a, b) {
    return a + b
}
console.log(sum2(2, 3))


// Arrow Functions
var prod = (a, b) => {
    return a * b
}

var prod2 = (a, b) => a * b

console.log(prod2(2, 3))
console.log(prod(2, 3))


// console.log(greet("Moin"))

//! Arrow functions either declared in let, var, or const will never be hoisted. 
// var greet = name => `Hello ${name}`
// const greet = name => `Hello ${name}`
// let greet = name => `Hello ${name}`


const add = (a, b, ...arge) => {
    let sum = 0
    for (let a in args) {
        sum += Number(args[a])
    }
    return sum
}
console.log(add(1, 2, 3, 4))
