for (let i = 0; i <= 50; i += 2) {
    console.log(i)
}
console.clear()

let num = 12345
while (num !== 0) {
    digit = num % 10;
    num = parseInt(num / 10);
    console.log(digit)
}

console.clear()

do {
    num = parseInt(prompt('Enter >50 number to exit '))
} while (num <= 50)

