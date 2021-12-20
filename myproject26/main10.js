

// 오브젝트를 리턴하고 싶은 의도. 
const mysum2 = (x, y) => { x, y };
// ▲ code block를 쓰겠다는 의미 {} 코드의 시작을 의미함.  
// js는 아무것도 return 하지 않으면 undefined가 뜬다.
console.log(mysum2(1, 2));

const mysum3 = (x, y) => { 
    return {x, y };
}
console.log(mysum3(1, 2));

// ()는 우선순위를 나타냄. 객체를 반환하려면 꼭 ()를 써줘야함.
const mysum4 = (x, y) => ({x, y});
console.log(mysum4(1, 2));