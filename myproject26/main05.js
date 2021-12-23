
// Array
// const [name] = ["Tom", 10, "Seoul"];
// // 첫번째 Tom만 name에 저장이 됨. 에러발생 X

// const[, age,] = ["Tom", 10, "Seoul"];
// // 혹은 const[, age] = ["Tom", 10, "Seoul"];

// // 좌항과 우항의 개수가 달라도 에러가 발생하지 않고 undefined가 나옴.
// // null은 값이 있는 거고 undefined는 할당된 값이 없다는 뜻.
// const [name, age, region, height] = ["Tom", 10, "Seoul"];

// // undefiend인 경우에 (값 할당에 실패했을 때) 적용되는 디폴트 값
// const [name, age, region, height = 140] = ["Tom", 10, "Seoul"];

// 디폴트 값을 함수 호출로 지정 : 디폴트 값이 필요한 시점에 함수가 호출됨.
function get_default_height(){
    console.log("get_default_height 함수를 호출했습니다.");
    return 140;
}
// const [name, age, region, height = get_default_height()] = ["Tom", 10, "Seoul", 150];

const [name, age, region, height = get_default_height()] = ["Tom", 10, "Seoul"];