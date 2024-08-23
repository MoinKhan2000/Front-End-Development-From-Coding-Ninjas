// req = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve("Promise fulfilled!")
//         // resolve({ name: "Moin", class: "1st yesr" })
//         reject('Promise rejected')
//     }, 1000)
//     setTimeout(() => {
//         resolve("Promise fulfilled!")
//         resolve({ name: "Moin", class: "1st yesr" })
//     }, 1000)
// })
// // console.log('hii', req);
// req.then((value) => {
//     console.log(value);
// }).catch((err) => {
//     console.log(err);
// }).finally(() => {
//     console.log('Request Completed!');
// })
// console.log('hii');

function getUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId === 123) {
                resolve({ id: 123, name: 'John Doe', age: 23 });
            }
            else {
                reject('User not found')
            }
        }, 1000)

    })
}

function displayUserData(userId) {
    getUserData(userId).then((userData) => {
        console.log(userData)
    })
}