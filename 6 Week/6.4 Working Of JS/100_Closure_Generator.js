// Complete the genrateID function
//Do not alter the starter code
function generateID(cnt) {
    let id = "A_2023_"
    let count = cnt
    return function func() {
        return `${id}${count++}`
    }
}

const func = generateID(99);
console.log(func());//Output : A_2023_99
console.log(func()); // Output: A_2023_100
console.log(func()); // Output: A_2023_100
console.log(func()); // Output: A_2023_100
console.log(func()); // Output: A_2023_100
console.log(func()); // Output: A_2023_100



var a = 1;
function b() {
    a = 10;
    return;
}
b();
console.log(a)