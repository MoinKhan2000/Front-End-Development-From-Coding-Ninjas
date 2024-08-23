//Write the program to convert tempF to into celcius and also to detect fever.
//Assign the final answer in result variable.
//Do not alter anything else given in the starter code

function main(tempF) {
    let result;

    let celcius = Number((tempF - 32) * 5 / 9);
    if (celcius >= 37) {
        result = 'you have got a fever ' + celcius.toFixed(1)
    }
    else {
        result = "you don't have a fever " + celcius.toFixed(1)
    }
    return result;
}

console.log(main(104))