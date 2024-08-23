/*   Type Conversion   */
// 1. Convert to String 
// 1.1 String()
console.log(100, String(100))
console.log(String(true), String(false))
console.log(String(null), String(undefined))

// 1.2 toString()
console.log((100).toString(), true.toString(), false.toString())
// (null).toString(), undefined.toString()  ----->  null and undefined values cannot be converted to String using toString() function it will throw an error

// 2. Convert to Number
// 2.1. Number();
console.log('100', Number('100'))
console.log('100asdf', Number('100asdf')) // NaN
console.log(false, Number(false))   // false 0 
console.log(true, Number(true))     // true 1
console.log(undefined, Number(undefined))       // undefined NaN
console.log(null, Number(null))   // null 0
console.clear()

// 2.2. Unary + Operator-- - works on Variables (convert string variables to number using unary +)
let a = '100'
console.log(+a) // 100 (number)
a = '100asdf'
console.log(+a) // NaN 

// 2.3. parseInt()
console.log(parseInt('10000'))   // 10000 (number) 
console.log(parseInt('10000asdf'))   // 10000 (number) 
console.log(parseInt('asdf10000asdf'))   // NaN  
console.log(parseInt('123.324'))   // NaN  


// 2.4. parseFloat()
console.log(parseFloat('123.324'))



// 3. Convert to Boolean

// 3.1 Boolean 
console.log(Boolean('true')) // true
console.log(Boolean('false')) // true
console.log(Boolean('1')) // true
console.log(Boolean('')) // false
console.log(Boolean(0)) // false
console.log(Boolean(1)) // true
console.log(Boolean(undefined)) // false
console.log(Boolean(null)) // false

