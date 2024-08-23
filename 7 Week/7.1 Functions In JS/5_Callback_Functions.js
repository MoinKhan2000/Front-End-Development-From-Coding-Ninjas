// Callback Functions

function greet(wish) {
    console.log(`${wish()}! Welcome to the JS Course!`);
}

function sayHi() {
    return 'Hi'
}

function sayHello() {
    return 'Hello'
}
function goodMorning() {
    return 'GM'
}

greet(sayHi)
greet(sayHello)
greet(goodMorning)