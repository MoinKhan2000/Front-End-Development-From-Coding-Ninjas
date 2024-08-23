let buttonElem = document.getElementById('button')
let textElem = document.getElementById('text')

buttonElem.addEventListener('click', () => {
    textElem.innerText = 'Button Is Clicked'
    setTimeout(() => {
        textElem.innerText = ''
    }, 3000)
})


// for (var i = 0; i < 5; i++) {
//     setTimeout(() => {
//         console.log(i, end = " ");
//     }, 1000);
//     for (let i = 0; i < 5; i++) {
//         setTimeout(() => {
//             console.log(i), end = " ";
//         }, 1000);
//     }
// }

