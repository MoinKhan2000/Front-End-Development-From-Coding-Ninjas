function timer() {
    console.log("Hello ninjas!");
    for (let i = 0; i <= 5; i++) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000);
    }
}

timer()