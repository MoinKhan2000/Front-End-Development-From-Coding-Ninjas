const std = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

for (let i = 0; i < std.length; i++) {
    console.log(`Roll number ${i + 1} to ${std[i]}`);
}

console.clear()
std.forEach((e, index) => {
    console.log(`Roll number ${index + 1} to ${e}`);
})

console.clear()
for (let i in std) {
    console.log(`Roll number ${+i + 1} to ${std[i]}`)
}
console.clear()

for (let s of std) {
    console.log(`Roll number ${std.indexOf(s) + 1} to ${s}`);
}