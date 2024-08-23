console.log('Operators IN JS')

/* 1. Arithmetic Operators
    (+, - , *, /, %, **, ++, --,)
*/

/*
console.log(5 + 3); // addition operator
console.log(5 - 3); // subtraction operator
console.log(5 * 3); // multiplication operator
console.log(5 / 3); // division operator
console.log(5 ** 3)  // power 
x = 4;
console.log(x++) // current x = 5
console.log(x)   // current x = 5
console.log(x--) // current x = 4
console.log(x)

*/

/* 2. Assignment Operators
    (=, +=, -=, *=, /=, %=, **=)
*/
/*
let x = 4;
let y = 5
y **= 2;
console.log(y)

*/

/* 3. Comparison Operators
    (<, >, <=, >=, ==, ===, !=, !==)
*/
console.log(4 > 5, 5 > 4, 5 != 5)
console.log(5 == '5')
console.log(5 === '5')
console.log(5 != '5')
console.log(5 !== '5')

/* 4. Logical Operators
    (&&, ||, !)
*/

// && -> It will always give us the last truthy and first falsy value 
console.log(true && true, false && true, true || false)
console.log(!false, !!0)
console.log(true && 'hello')  // hello -> last truthy value
console.log(false && 'hello') // false -> first falsy value

// || -> It will always give us the first truthy and last falsy value 
console.log(true || 'moin')  // true -> first truthy value
console.log(0 || false || '' || null) // null -> last falsy  value

/* 5. Bitwise Operators
    (>>, <<, &, | , ^, ~)
*/


console.log({ 0: 'moin' } << null)  // 0
console.log({ 0: 'moin' } >> null)  // 0
console.log(17 >> 4)  // 1
console.log(2 << 3)  // 16


text1 = "20"
text2 = "5"
res = text1 < text2
console.log(res) // true
// While comparing strings in JavaScript the characters in the strings are compared one at a time, starting with the first character of each string.Here '5' of ‘5’ is greater than '2' of '20' so it console true.