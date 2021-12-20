//Async 비동기 

// 1) Callback
// const fs = require("fs");

// fs.readdir("c:/Dev", function(err, files) {
//     if(err) {
//         console.error(err);
//     }
//     else {
//         console.log(files);
//     }
// });

// console.log("ENDED");




// 2) promise
// const fs = require("fs");
// const fsPromises = fs.promises;

// fsPromises.readdir("c:/Dev")
//     .then(function(files) {
//         console.log("loaded :", files);
//     })
//     .catch(function(error) {
//         console.error(error);
//     });


// fsPromises.readdir("c:/Dev")
//     .then(files => console.log("loaded :", files))
//     .catch(error => console.error(error));

// console.log("ENDED");


// 3)
// await는 promiser 문법에대한 축약
// awaitsms async에서만 동작함. 
const fs = require("fs");
const fsPromises = fs.promises;

async function main() {
    try {
        const files = await fsPromises.readdir("c:/Dev");
        console.log("loadded :", files);
    }
    catch(error){
        console.error(error);
    }
}

main();

console.log("ENDED");

//Async 비동기 

// 1) Callback
// const fs = require("fs");

// fs.readdir("c:/Dev", function(err, files) {
//     if(err) {
//         console.error(err);
//     }
//     else {
//         console.log(files);
//     }
// });

// console.log("ENDED");




// 2) promise
// const fs = require("fs");
// const fsPromises = fs.promises;

// fsPromises.readdir("c:/Dev")
//     .then(function(files) {
//         console.log("loaded :", files);
//     })
//     .catch(function(error) {
//         console.error(error);
//     });


// fsPromises.readdir("c:/Dev")
//     .then(files => console.log("loaded :", files))
//     .catch(error => console.error(error));

// console.log("ENDED");


// 3)
// await는 promiser 문법에대한 축약
// awaitsms async에서만 동작함. 
const fs = require("fs");
const fsPromises = fs.promises;

async function main() {
    try {
        const files = await fsPromises.readdir("c:/Dev");
        console.log("loadded :", files);
    }
    catch(error){
        console.error(error);
    }
}

main();

console.log("ENDED");

