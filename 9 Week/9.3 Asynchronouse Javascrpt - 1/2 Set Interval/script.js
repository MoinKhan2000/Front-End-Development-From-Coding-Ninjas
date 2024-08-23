let text = document.getElementById('text');
console.log(text);
let i = 0;

let id = setInterval(() => {
    text.innerText = `${i}`;
    i += 1;
}, 1000);

setTimeout(() => {
    clearInterval(id);
}, 5000);
