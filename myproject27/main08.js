// TODO: #8 곡명에 "사랑"이 포함된 곡들의 곡명 배열을 구성해주세요.
// Array의 filter와 map 활용
// 출력포맷 : [곡명1, 곡명2, 곡명3]


//indexOF 혹은 includes 사용 
// sonh["title"].indexOF("사랑")
// sonh["title"].indexOF("사랑") > -1 이 includes와 같은 역할. 
// 최신 문법은 includes. 

const { melon_data: song_array } = require("./melon_data");


const lovesong_title_array = song_array
    .filter(
        song => song.title.indexOf("사랑") > -1
    )
    .map(({ title }) => title);

for (const song of lovesong_title_array){
    console.log(song);
}
    

// const lovesong_title_array = song_array
//     .filter(({ title }) => title.includes("사랑"))
//     .map(({ title }) => title);


// for (const song of lovesong_title_array) {
//     console.log(song);
// }