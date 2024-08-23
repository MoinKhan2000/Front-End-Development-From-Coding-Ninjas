let arr = [1, -2, 3, -4, 5, -6, 7, 8, -9, 10, 11]
let getPositive = (num) => {
    if (num > 0) return num
}
let positives = arr.filter(getPositive)
console.log(positives);


let negatives = arr.filter((num) => {
    if (num < 0) return num
})
console.log(negatives);
