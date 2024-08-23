let arr = [1, 2, 3, 4, 4, 5, 5, 5, 6, 7, 8, 9, 10]
let find1 = arr.find((num) => { return num === 5 })
let find2 = arr.find((num) => { return num === 15 })
console.log(find1); // 5
console.log(find2); // undefined
console.log(5 in arr);

console.log(arr.findIndex((num) => num === 5));         // 5 
console.log(arr.findLastIndex((num) => num === 5));     // 7

let arr2 = new Array(5).fill(0); // Fill the array with initial values, in this case, 0
console.log(arr2); // Output: [0, 0, 0, 0, 0]

// Use map to fill the array based on a condition
const filledArray = arr2.map(num => num === 0 ? 5 : num);
console.log(filledArray); // Output: [5, 5, 5, 5, 5]


const numbers = [1, 2, 3, 4, 5, 2, 4, 2]
const filterdNumbers = numbers.filter((element, index, array) => {
    console.log(array.indexOf(element), index);
    return array.indexOf(element) === index;
})
console.log(filterdNumbers);