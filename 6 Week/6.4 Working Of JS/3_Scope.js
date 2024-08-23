// Scopes IN JS


// 1. Global
// 2. Functional(Local)
// 3. Block - ES6


// var varNum = 10;
// let letNum = 20;
// const constNum = 30;

{
    var varNum = 10;
    let letNum = 20;    // Let is block level
    const constNum = 30;    // const has a block level scope.
}

function print() {
    var varLoacalNum = 10;
    let letLoacalNum = 20;
    const constLoacalNum = 30;

    // Trying to access global variables...
    // console.log(varNum, letNum, constNum)   // 10 20 30 

    // Trying to access blocked level variables...
    // console.log(varNum, letNum, constNum)   // Error
}

print()



// Trying to access functional level (Local Level) variables...
// console.log(varLocalNum, letLocalNum, constLocalNum)   // Errors