//? Higher Order Functions - Any functions which accepts the function or returns the function known as the higher order function.

/*

 function square(input) {
    const squaredArray = []
    for (let num of input) {
        squaredArray.push(num * num)
    }
    console.log(squaredArray)
}

function cube(input) {
    const cubeArray = []
    for (let num of input) {
        cubeArray.push(num * num * num)
    }
    console.log(cubeArray);
}

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
square(arr)
cube(arr)

*/


function operation(input, fn) {
    let output = []
    for (let num of input) {
        output.push(fn(num))
    }
    return output;
}

function square(num) {
    return num * num
}

function cube(num) {
    return num * num * num
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(operation(arr, square));
console.log(operation(arr, cube));
