


const {question} = require('readline-sync');
// const line = question("start -> enter");


const animal_names = [
    "cat",
    "dog",
    "fox",
    "monkey",
    "mouse",
    "panda",
    "frog",
    "snake",
    "wolf",
];
  
// const randeom_animal_names = animal_names
// .map((name) => ({
//         name,
//         value: Math.random(),
//     }))
//     .sort((obj_a, obj_b) => {
//         return obj_a.value - obj_b.value;
//     })
//     .map (obj => {
//         return obj.value;
//     });

const shuffled_animal_names = animal_names
.map((name) => ({
        name,
        value: Math.random(),
    }))
    .sort((obj_a, obj_b) => {
        return obj_a.value - obj_b.value;
    })
    .map(({ name }) => name);

    const begin_time = new Date().getTime(); //float
    let ok_counter = 0;

    for (const animal_name of shuffled_animal_names.slice(0,5)) {
        console.log(animal_name);
        const line = question(`%{animal_name} >>> `);
        if (line === animal_name) {
            ok_counter++;
        }
    }


    const end_time = new Date().getTime(); //float
    const time = end_time - begin_time;

    console.log(`총 ${parseInt(time/1000)}초가 소요되었습니다.`);
    console.log(`총 ${ok_counter}회 맞추셨습니다.`);




// const begin_time = Date.now();
// let OK_count = 0;

// const random_animal = word.slice(0, 5);

// for (name of random_animal){
//     console.log(name);
//     const line = question(">>> ");

//     if (name === line) {
//         OK_count++;
//         console.log("정답입니다.");
//     }
//     else {
//         console.log("오류가 있습니다.");
//     }
// }

// const end_time = Date.now();

// console.log(`${OK_count}번 성공하셨습니다.`)
// console.log(`소요 시간은 ${(end_time - begin_time) / 1000}초 입니다.`)



