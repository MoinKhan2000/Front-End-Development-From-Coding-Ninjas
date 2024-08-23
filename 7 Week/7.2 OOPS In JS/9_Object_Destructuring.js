const obj = {
    a: 1,
    b: 2,
    c: [0, 1, 2],
    d: { val: 'Value' }
}

// Binding Pattern
let { a: a1, d, c } = obj       // destructuring a as a1
console.log(a1, c, d);


// Assignment Pattern
console.log('Assignment Pattern');
let b;
({ b } = obj); // Corrected destructuring assignment syntax
console.log(b);

obj = { firstName: "Moin", lastName: "Khan" }
let { firstName: fn, lastName: ln } = obj
console.log(firstName);

{
    let { a, b } = { a: 1, b: 2 }
    const x = a + b
    console.log(x);


}


