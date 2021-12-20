
// 객체
// const age = "나이";

// const tom = {
    // "name":"Tom",
    // "age": 10,
    // age: 10,
//    ["ag" + "e"]: 10, // 계산을 하고 싶다면 [] 사용 필요.
    // [age]: 10, 
    // age로 받고싶다면 []을 빼고 나이라고 받고싶으면 []를 넣어야함.     
    // []안에 넣으면 평가가 되어 나옴. 
// }

// console.log(tom);


const name = "Tom";
const age = 10;
const tom1 = {
    name,
    age,
    print(){
        // console.log(this.name, this.age);

        // Template Literals
        console.log(`안녕. 나는 ${this.name}이야. 
${this.age}살이지.`);
    }
}

tom1.print();





