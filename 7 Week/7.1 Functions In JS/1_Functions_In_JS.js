// Function Declaration
// The function declaration is hoisted, so it can be called before its actual declaration
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15));

function sum(a, b, ...args) {
    let addition = 0;
    addition += parseInt(a);
    addition += parseInt(b);
    for (let num of args) {
        addition += parseInt(num);
    }
    return addition;
}

//! Error: Cannot access sum2 because function expressions are not hoisted
console.log(sum2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15));

// Anonymous Functions - Function Expression
// Function expression using 'const' - not hoisted
// const sum2 = function (a, b, ...args) {
//     let addition = 0;
//     addition += parseInt(a);
//     addition += parseInt(b);
//     for (let num of args) {
//         addition += parseInt(num);
//     }
//     return addition;
// };

// Using 'var' for function expression - var hoisted but value is undefined until assigned
var sum2 = function (a, b, ...args) {
    let addition = 0;
    addition += parseInt(a);
    addition += parseInt(b);
    for (let num of args) {
        addition += parseInt(num);
    }
    return addition;
};

console.log(sum2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15));
