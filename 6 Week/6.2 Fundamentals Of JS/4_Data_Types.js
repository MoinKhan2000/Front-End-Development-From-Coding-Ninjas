/*
Data Types
1. Object
2. Primitive Datatypes
*/

/* ********************************
    *** Primitive Datatypes ***
******************************** */

// 1. Number (64 bit)
let num = 10
console.log(num) // Output: 10
console.log(typeof num)  // Output: number


// 2. Null
let area = null
console.log(area) // Output: null
console.log("typeof area ", typeof area) // Output: object


// 3. Boolean
let isTrue = true
console.log(isTrue) // Output: true
console.log(typeof isTrue)

// 4. BigInt(ES / 2020)
let bigInt = 2n;
console.log(bigInt) // Output: 2.3423522354235235e+33
console.log("typeof bigInt", typeof bigInt) // Output: number

// 5. String
let name = 'Moin Khan'
console.log(name) // Output: Moin Khan
console.log("typeof name", typeof name)

// 6. Symbol (ES6 / 2015)



// 7. Undefined



// ******** Intresting Things ********* 
console.log(Number.EPSILON)
console.log(Math.PI);
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.MAX_VALUE * 10)
console.log(Number.MAX_VALUE * -10)
console.log(typeof Number.MAX_VALUE * -10) // NaN
console.log(typeof Number.MAX_VALUE * 10)  // NaN


let number = Infinity;
console.log(number) // Output: Infinity
console.log(typeof number) // Output: number

// divide by zero
console.log(23 / Infinity) // Output: 0
console.log(23 / 0) // Output: Infinity
console.log(Infinity / Infinity) // Output: NaN