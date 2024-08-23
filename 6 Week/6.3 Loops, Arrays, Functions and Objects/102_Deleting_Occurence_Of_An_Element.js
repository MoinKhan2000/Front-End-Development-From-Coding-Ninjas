//Complete the deleteOccur function
//Do not alter the starter Code.
let arr = [23, 56, 4, 78, 5, 63, 45, 210, 56];
let ele = 56;
function deleteOccur(arr, ele) {
    if (arr.includes(ele)) {
        let indx = arr.indexOf(ele);
        arr.splice(indx, 1);
    }
    return arr
};

console.log(arr)
console.log(deleteOccur(arr, ele));