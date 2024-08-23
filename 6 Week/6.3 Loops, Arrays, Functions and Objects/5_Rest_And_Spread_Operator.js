const aprilBatch = ['moin', 'mohsin', 'mahi']
const mayBatch = ['harshit', 'faizal']
const juneBatch = ['arjun', 'gourav']
const julyBatch = ['kumkum', 'swaleha', 'priyanshu', 'komal']

// function addStudent(batch, student) {
//     batch.push(student)
//     console.log(batch)
// }

// addStudent(aprilBatch, 'kunal')
// addStudent(aprilBatch, 'kunal')


// Rest ...
function addStudentRest(batch, ...students) {
    for (let el in students) {
        batch.push(students[el])
    }
    // console.log(batch)

}
addStudentRest(aprilBatch, 'kunal', 'navneet', 'lokesh', 'nandini')
console.log(aprilBatch)



// Spread ...

const newBatch = mayBatch  // a reference will be created.
console.log(newBatch)
mayBatch.push('newStudent')
console.log(newBatch, mayBatch)
console.clear()

const correctWay = [...mayBatch]  // shallow copy will be created.
console.log(correctWay)
mayBatch.push('newStudent2')
console.log(correctWay, mayBatch)



// Purpose of Spread Operator.
let arr1 = ['a', 'b', 'c', 'd', 'e', 'f']
let arr2 = ['j', 'k', 'l', 'm', 'n', 'o', 'p']
let arr3 = [...arr1, ...arr2]
console.log(arr3)

let myName = 'Moin Khan'
let arrMyName = [...myName]
console.log(arrMyName)