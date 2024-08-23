function main(email) {
    let result;
    emailLen = email.length
    dotIndex = email.lastIndexOf('.')
    atIndex = email.lastIndexOf('@')
    lastIndex = emailLen - 1
    if (emailLen < 11 || lastIndex - dotIndex < 2 || lastIndex - dotIndex > 3 || dotIndex - atIndex < 3 || dotIndex - atIndex < 3) {
        result = 'invalid email'
    } else {
        result = email + 'is valid'
    }
    return result;
}



console.log(main('moink3181@gmail.com'))