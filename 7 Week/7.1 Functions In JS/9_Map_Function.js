// JS Higher order functions

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
newArr = arr.map((num) => {
    return num * num
})
console.log(newArr)     // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]


newArr = arr.filter((num) => {
    return num > 4
})
console.log(newArr)     // [5, 6, 7, 8, 9, 10]


data = [2, 3, 5, 7]
neaData = data.map()
console.log(newData);
