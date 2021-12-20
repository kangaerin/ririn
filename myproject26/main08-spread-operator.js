
// const [name, ...rest] = ["Tom", 10, "Seoul"]

// console.log(name);
// console.log(rest);

// const numbers = [1, 2, 3];

// const new_numbers = [
//     10, 20, 30,
//     ...numbers,
//     40, 50, 60,
//     ...numbers,
//     70, 80, 90,
//     ...numbers,
// ]

// console.log(new_numbers)

const tom = {
    "name": "Tom",
    "age": 10,
    "region": "Seoul",
};

// 순서가 바뀌면 안됨. 먼저 불러오고 name 지정.
const steve = {
    ...tom,
    name: "Steve",
};

console.log(steve)