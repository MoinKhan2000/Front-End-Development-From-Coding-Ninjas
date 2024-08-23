/*
function add1(a, b, c) {
    return a + b + c
}

function add2(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}
  
console.log(add1(1, 2, 3));
console.log(add2(1)(2)(3));
*/

function power(b) {
    return function (a) {
        return a ** b
    }
}

const square = power(2)
console.log(square(11));    //121
console.log(square(6));     //36
console.log(square(3));     //9


const cube = power(3)
console.log(cube(8));       //512
console.log(cube(7));       //343
console.log(cube(3));       //27
