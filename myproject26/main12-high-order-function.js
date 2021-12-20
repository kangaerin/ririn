
// arrow function 버전으로 

// function base_10(fn) {
//     function wrap(x, y) {
//         return fn(x, y) + 10;
//     }
//     return wrap;
// }

// function mysum(x, y) {
//     return x + y;
// }

// mysum = base_10(base_10(mysum));
// console.log(mysum(1, 2));

function base_10(fn){
    const wrap = (x, y) => fn(x, y) + 10;
    retur
    n wrap;
}

// ▽

function base_10(fn){
    return (x, y) => fn(x, y) + 10;
};

// ▽

const base_10 = (fn) => {
    return (x, y) => fn(x, y) + 10;
};

// ▽

const base_10 = (fn) => (x, y) => fn(x, y) + 10;

// 풀어쓰면 
// function base_10(fn) {
//     function wrap(x, y) {
//         return fn(x, y) + 10;
//     }
//     return wrap;
// } 이 됨.


