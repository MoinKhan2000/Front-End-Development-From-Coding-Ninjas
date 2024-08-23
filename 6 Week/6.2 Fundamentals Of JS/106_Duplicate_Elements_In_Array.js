// Complete the findDuplicate function
// Do not alter the starter code.

let arr = [4, 2, 34, 4, 1, 12, 1, 4];

function findDuplicate(arr) {
    // Implement your function here
    let duplicates = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
                duplicates.push(arr[i]);
            }
        }
    }

    return duplicates;
}

console.log(findDuplicate(arr));
