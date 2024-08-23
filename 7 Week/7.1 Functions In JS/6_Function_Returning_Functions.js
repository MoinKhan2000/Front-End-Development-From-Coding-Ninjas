function greet(message) {
    return function (wishes) {
        console.log(`${wishes}, ${message}`);
    }
}


const greeting = greet("I hope you are doing well.")
greeting('Moin')

greet('I hope you are doing well')('Moin')
