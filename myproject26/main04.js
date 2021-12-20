// 객체복사
// 변수명으로 사용할 수 있는 값은 ""을 써도 되고 안써도 되지만 p-1 같은 경우는 꼭 ""로 묶어줘야함.

const obj1 = {value1: 10, };
const obj2 = obj1; // 얕은 복사

// 깊은 복사하는 방법 중의 하나. 깊은 복사를 지원하는 다양한 JS 라이브러리가 있습니다.
// 아래 방법은 가장 무식한 방법입니다. (효율적이진 않음.)
const json_string = JSON.stringify(obj1)
const obj3 = JSON.parse(json_string);

obj1.value1 += 1;


console.log(obj1);
console.log(obj2);
console.log(obj3);

// ------------

// const obj1 = {value1: 10, "p-1": 20, };

// // 지정 속성이 없으면 undefined를 반환
// //console.log(obj1.nale);

// //js에서는 함수가 아무런 값도 리턴하지 않으면 undefined를 반환
// function fn() {}
// console.log(fn());

// //두가지로 접근 가능. 
// obj1["value1"]
// obj1.value1

// obj1["p-1"]
//obj1.p-1 <- 이쪽은 안됨.



