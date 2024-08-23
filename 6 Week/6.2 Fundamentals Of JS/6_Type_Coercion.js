/* Type Coercion */
console.log(5 + 5)
console.log(5 + "5")
let res = 5 + '5'
console.log(typeof res) // string


// Only for Plus (+)
let firstName = 'Moin'
let lastName = 'Khan'
let fullName = firstName + lastName
console.log(fullName)

// What does it do with Negative (-) , Multiplicative(*) ? It basically tries to convert into numbers and then resolves it. otw return NaN (Not a Number) 

let sub = '55' - 10
console.log(sub) // 45 type - number

let mul = '55' * 10
console.log(mul) // 550 type - number

let div = '55' / 10
console.log(div) // 5.5 type - number

let numb = '55'