function isDigit(char) {
    return char >= '0' && char <= '9';
}

function isValidCharacter(char) {
    return (char >= 'a' && char <= 'z') ||
        (char >= 'A' && char <= 'Z') ||
        char == '-' || char == '$'
}

function isValidIdentifier(input) {
    if (input.trim() == "") {
        console.log(`${input} is not a valid identifier`)
        return
    }

    if (isValidCharacter(input[0])) {
        for (var i = 1; i < input.length; i++) {
            if (!isValidCharacter(input[i]) || !isDigit(input[i])) {
                console.log(`${input} is not a valid identifier`)
                return
            }
        }
        console.log(`${input} is a valid identifier`)
    }
    else {
        console.log(`${input} is not a valid identifier`)
        return
    }
}