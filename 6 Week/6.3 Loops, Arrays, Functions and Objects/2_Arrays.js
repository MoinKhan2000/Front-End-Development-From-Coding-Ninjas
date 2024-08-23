function name() {
    console.log('hii')
}

students = ['Moin',
    'Mohsin',
    "Mahi",
    true,
    false,
    , undefined,
    0,
    1,
    null,
    1.3,
    1.333,
    name,
    { name: 'John' }]
console.log(students[12]())
console.log(typeof students)  // object


// Methods 
console.log(students.length)
students[1] = 'Moin Khan'
console.log(students[1])