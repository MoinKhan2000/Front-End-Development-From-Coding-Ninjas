const fruits = ["Apple", "Banana", "Guava", "Kiwi", "Berry", "Lichi", "Strawberry"]

// Binding Pattern
// const [a, b, , k, ...f] = fruits
// console.log(a, b, k, f);


const [a, m, ...[, ki, be]] = fruits
console.log(a, m, ki, be);

