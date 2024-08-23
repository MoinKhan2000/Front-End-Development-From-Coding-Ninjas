// //Complete the URLconstructor function
// // Do not change the starter code.

// function URLconstructor(queryParameters, domain, path) {
//     let url = `https://${domain}${path}`;
//     if (queryParameters) {
//         // url += `name=${queryParameters.name}?age=${queryParameters.age}`;
//         // if (queryParameters.name) {
//         //     url += `?name=${queryParameters.name}`
//         // }
//         // if (queryParameters.age) {
//         //     url += `?age=${queryParameters.age}`;
//         // }
//         for (let key in queryParameters) {

//         }
//     }

//     return url;
// }
// const queryParameters = { name: 'moin', age: 28 };
// const domain = "google.com";
// const path = '/search';
// console.log(URLconstructor(queryParameters, domain, path));
// //output: https://google.com/search?name=John?age=28
// //output: https://google.com/search?name=John?age=28 




function URLconstructor(queryParameters, domain, path) {
    let finalurl = "";
    finalurl += "https://";
    finalurl += domain;
    finalurl += path;
    for (let key in queryParameters) {
        finalurl += '?';
        finalurl += key;
        finalurl += '=';
        finalurl += queryParameters[key];
    }
    return finalurl;
}

const queryParameters = { name: 'John', age: '28' };
const domain = "google.com";
const path = '/search';
console.log(URLconstructor(queryParameters, domain, path));
