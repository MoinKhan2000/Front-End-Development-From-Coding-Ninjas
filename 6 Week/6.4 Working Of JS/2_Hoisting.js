console.log(`username ${userName}`)
console.log(`userAge ${userAge}`)

greetUser(userName);

var userName = 'Moin'
var userAge = 28;


console.log(`username ${userName}`)
console.log(`userAge ${userAge}`)
function greetUser(name) {
    var greet = 'I hope you are donig fine'
    console.log(`hello ${name}, ${greet}`)
    var currentYear = 2030
    const year = currentYear - userAge
    return `Your birth year is ${year}`
}

var birthYear = greetUser(userName)
console.log(`birthYear ${birthYear}`)