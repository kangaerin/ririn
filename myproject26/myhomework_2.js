

// const numbers = [1, 2, 3, 4, 5]


// // 내장함수 map

// // 새로운 assay(배열), 제곱수로 구성된 숫자배열
// function mapper(number) {
//     return number ** 2;
//  }

//  // 간편화 
// const mapper = (number) => {
//     return number ** 2;
// }

// const mapper = (number) => number ** 2;

// const mapper = number => number ** 2;
// //

// const nuew_numbers = numbers.map(mapper);
// console.log(new.nuew_numbers);


// const nuew_numbers = numbers.map(
//     number => number ** 2
//     );
// console.log(new_numbers);


//

//sorted 예시

const numbers = [1, 2, 3, 4, 5]; // [31, 89, 24, 81, 46];

// Array의 sort
function make_random_value(number1, number2) {
    return Math.random();
}

const number1 = numbers.map(
    (number) => ({ number, 기준값: Math.random() }),
);

const number2 = number1.sort(
    (value1, value2) => {
        return value1.기준값 - value2.기준값;
    }
);

const number3 = number2.map(
    (value) => value.number
);

console.log(new_numbers);

// map 예시
const numbers = [1, 2, 3, 4, 5];

// 새로운 Array(배열), 제곱수로 구성된 숫자 배열
// function mapper(number) {
//     return number ** 2;
// }

// const mapper = (number) => {
//     return number ** 2;
// }

// const mapper = (number) => number ** 2;

// const mapper = number => number ** 2;

// const new_numbers = numbers.map(mapper);
// console.log(new_numbers);

const new_numbers = numbers.map(
    number => number ** 2
);
console.log(new_numbers);