
// function mysum3(x, y, z) {
//     return x + y *10 + z * 100;
// }

// mysum3(1,2,3)

// js에는 없는 문법
// mysum3(x=1, y=2, z=3)

// 파이썬의 keyword arguments와 비슷하게 사용하는 코드

mysum3({ x: 1, y: 2, z: 3});
// 위 코드로는 위의 함수를 호출할 수 없음.


// 객체는 객체로 받아야함. 
const { x, y, z} = { x: 1, y: 2, z: 3}

function mysum3({ x, y, z }) {
    return x + y *10 + z * 100;
}

mysum3({ x: 1, y: 2, z: 3});

// --------
const people = [
    { name: 'Tom', age: 10, region: 'Seoul' },
    { name: 'Steve', age: 12, region: 'Pusan' }
  ];

  for (const { name, age } of people) {
    console.log(name, age);
  }