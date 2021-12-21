

// TODO : 현재 timestamp

// TODO : shuffle

// TODO : slicing  (array를 slicing)

// TODO : input 받기 
// readline-sync 라이브러리 설치 
// 소스코드가 있는 폴더까지 이동해서 !!!

// mpn install readline-sync


// // string
const animal_names = [
    "cat",
    "dog",
    "fox",
    "monkey",
    "mouse",
    "panda",
    "frog",
    "snake",
    "wolf",
];
  

// create a function to shuffle a list
// function shuffle(a) {
//     var j, x, i;
//     for (i = a.length - 1; i > 0; i--) {
//         j = Math.floor(Math.random() * (i + 1));
//         x = a[i];
//         a[i] = a[j];
//         a[j] = x;
//     }
//     return a;
//   }
// x = animal_names
  
//   shuffle(x) 

// x1 = x.slice(1,2);
//   console.log(x1);

const {question} = require('readline-sync');
const number = question("start -> enter");

// const word = animal_names[Math.floor(Math.random() * animal_names.length)]

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

const begin_time = Date.now();
let OK_count = 0;

const random_animal = word.slice(0, 5);

for (name of random_animal){
    console.log(name);
    const line = question(">>> ");

    if (name === line) {
        OK_count++;
        console.log("정답입니다.");
    }
    else {
        console.log("오류가 있습니다.");
    }
}

const end_time = Date.now();

console.log(`${OK_count}번 성공하셨습니다.`)
console.log(`소요 시간은 ${(end_time - begin_time) / 1000}초 입니다.`)