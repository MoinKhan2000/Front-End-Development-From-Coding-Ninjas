// let obj = { name: "Moin", country: "India", age: 30 }
// let name;
// ({ name } = obj)
// let { country: c, age: a } = obj;
// console.log(obj);
// obj.country = "Canada"
// console.log(name, c, a);
// console.log(obj);


// let a = 10
// let b = 20
// [a, b] = [b, a]
// console.log(a, b);

let nestedArray = ["orange", ["apple", 'banana', ["grape", "mango"]], "peach"]
let [first, [, , [third]]] = nestedArray
console.log(first, third);

