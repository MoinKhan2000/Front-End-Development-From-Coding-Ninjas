// reduce(callback, initialvalue)
// function redFn(accumulator, currentValue, currentIndex, arr)

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const sum = arr.reduce((total, num, index) => {
    console.log(total, index);
    return total + num
},)
console.log(sum);

const findOccurrence = arr.reduce((countMap, num) => {
    countMap[num] = (countMap[num] || 0) + 1;
    return countMap;
}, {});

console.log(findOccurrence);

let numbers = [1, 2, 3, 4, 5]
const evenSum = numbers.reduce((acc, num) => {
    if (num % 2 === 0) {
        return acc + num
    }
})
console.log(evenSum);
