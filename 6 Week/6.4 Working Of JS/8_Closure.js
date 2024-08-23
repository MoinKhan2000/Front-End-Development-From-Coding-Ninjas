// let a = 'Global'
// function outerPrint() {
//     let b = 'OuterPrint'
//     function innerPrint() {
//         let c = 'InnerPrint'
//         return `${a}->${b}->${c}`;;
//     }
//     const show = innerPrint();
//     console.log(show);
// }
// outerPrint()

let a = 'Global'
function outerPrint() {
    let b = 'OuterPrint'
    return function innerPrint() {
        let c = 'InnerPrint'
        return `${a}->${b}->${c}`;;
    }

}
const show = outerPrint()
console.log(show)
const printInner = show()
console.log(printInner)     // Due to closure


//  Closure - is the function with it's lexical environments.