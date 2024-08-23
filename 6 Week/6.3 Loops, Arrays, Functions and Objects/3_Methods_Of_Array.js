/* ***  Methods on Arrays  ****/
let arr = ['betul', 'bhopal', 'indore', 'chindwara']

// 1. Adding an Element
// push
console.log(arr.push('kolkata')) // push the element at the last index and returns the lentgh of new array
console.log(arr)

// unshift
console.log(arr.unshift('mumbai'))  // push the element at the first index and returns the lentgh of new array
console.log(arr)


// 2. Removing an Element
// pop
console.log(arr.pop()) // remove the element at the last index and return the popped value
console.log(arr)

// shift
console.log(arr.shift()) // shift the element at the first index and return the popped value
console.log(arr)

// 3. Check the element is present in the array or not
// indexOf
console.log(arr.indexOf('delhi')) // -1
console.log(arr.indexOf('betul')) // 0

// includes
console.log(arr.includes('delhi')) // false
console.log(arr.includes('betul')) // true


// 4. slice and splice
// slice - It will not affect the original array
console.log(arr.slice(0, 3)) // it will give elements from 0 to 2 
console.log(arr.slice(2, 3)) // it will give elements from 2 to 2
console.log(arr.slice(-3))  // it will give elements from last index to 3rd index in reversed order 
console.log(arr)

// splice - It will affect the original array. It is used to insert elements in between the array.
arr.splice(2, 0, 'hyderabad', 'banglore') // here we are inserting two elements at index 2 without deleting any element from the array.
console.log(arr)


// 5. concating
let students1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
let students2 = [89, 7,]
let newArr = students1.concat(students2)
console.log(newArr)

console.log(students1)
students1.reverse()
console.log(students1)

input = 'Hello'
console.log(input.split("").reverse().join(""))