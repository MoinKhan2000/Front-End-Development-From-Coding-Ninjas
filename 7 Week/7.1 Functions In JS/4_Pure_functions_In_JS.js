// Pure Functions

function calculate(a, b) {
    return a * b
}

console.log('Calculating', calculate(12, 2))

//? Imputer Functions
discout = 25
function calculateDis(price) {
    return price - discout;  // dependent on outside variable
}
console.log('Your amount is ', calculateDis(30));