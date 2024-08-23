let array = [1, 2, 3, 4, 5]
console.log(array.__proto__);   // Constructor Array

let array2 = new Array(4, 5);
console.log(array2);
console.log(array2.__proto__); // Constructor Array);

console.log(array2.__proto__.__proto__);     // Object 


//~ Arrays are the Objects at the top level.




