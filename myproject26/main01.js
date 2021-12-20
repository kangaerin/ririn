
//
// 변수 상수 선언
// 

// var name = "애린"; // 선언
// name = "스팁" // 변경

// 변수
let name = "애린" //선언
name = "스팁" // 변경

// 상수(Constant)
const age = 10;
// age = 12; // 상수는 값 변경이 불가능.

console.log(name, age);

//
// 제어 구조
// 

const number = 10;

if (number % 2 ==0) {
    console.log("짝수");
}
else { 
    console.log("홀수");
}


for(let i=1; i<11; i++) {
    console.log(i);
}

for(let i=1; i<11; i+=2) {
    console.log(i);
}


//
// 함수
//

function mysum(x,y) {
    return x + y;
}
console.log(mysum(1,2))

const mysum2 = function (x, y){
    return x + y;
};
console.log(mysum2(1,2))

// arrow function
const mysum3 = (x, y) => {
    return x + y;
}
console.log(mysum3(1,2))

const mysum4 = (x, y) => x + y;
console.log(mysum4(1,2))


function mysum5(x,y, ...args) {
    console.log(x, y, args);
}

mysum5(1,2,3,4,5);


function reducer(preValue, currentValue) {
    return preValue + currentValue;
}

const result = [1, 2, 3, 4, 5].reduce(reducer, 0);
console.log(result);


const result2 = [1, 2, 3, 4, 5].reduce((preValue, currentValue) => {
    return preValue + currentValue;
})
console.log(result2);




const result3 = [1, 2, 3, 4, 5].reduce(
    (preValue, currentValue) =>  preValue + currentValue,
    0);
    
console.log(result3);


