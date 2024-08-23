// Complete the findClassTopper function
// Do not alter the starter code. 

const studentMarks = {
    John: [85, 90, 92, 88, 87],
    Jane: [92, 95, 89, 91, 94],
    David: [78, 85, 90, 92, 84],
    Emily: [90, 88, 92, 87, 91],
    Michael: [86, 92, 90, 89, 94]
};

function findClassTopper(studentMarks) {
    let topper;
    let highestMarks = 0;

    for (let student in studentMarks) {
        // Calculate total marks for each student without using reduce
        student.slice()
        let totalMarks = 0;
        for (let mark of studentMarks[student]) {
            totalMarks += mark;
        }

        // Check if the current student has higher marks
        if (totalMarks > highestMarks) {
            highestMarks = totalMarks;
            topper = student;
        }
    }

    return topper;
}

console.log(findClassTopper(studentMarks));
// Output: "Jane"
