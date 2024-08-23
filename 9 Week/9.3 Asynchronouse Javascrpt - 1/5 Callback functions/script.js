function greet(callback) {
    setTimeout(() => {
        callback("Hello World!");
        callback()
    }, 1000)
}


function message() {
    console.log('Welcome my freind welcome');
}


greet(message)