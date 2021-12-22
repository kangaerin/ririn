// // reduce(함수, 초기값)으로 구성됨.
// const numbers = [1, 2, 3, 4, 5];


// const result_sum = numbers.reduce((acc, number) => {
//     acc += number;
//     return acc;
// }, 0);

// console.log(`합 : ${result_sum}`)


// // map

// const new_numbers = numbers.map(number => number * number);
// console.log(`[제곱 : ${new_numbers}]`)


// // 위 제곱을 reduce로 구현

// const new_numbers2 = numbers.reduce((acc, number) => {
//     acc.push(number * number);
//     return acc;
// },
// []);
// console.log([`제곱 : ${new_numbers2}`]
//  ,)



// const new_numbers3 = numbers.reduce((acc, number) => {
//     acc[number] = number * number;
//     return acc;
// }, {});
// console.log(new_numbers3);


// sum

// this 쓸 때엔 꼭 function()을 써야함.
Array.prototype.sum = function() {
    return this.reduce((acc, element) => {
        return acc + element;
    }, 0);
};

const result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].sum(); 
console.log(result);



