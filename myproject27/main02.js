// TOOD: #2 방탄소년단의 곡명만 출력
// 출력포맷 : `가수명 곡명 좋아요수`
// Array의 filter 활용
// ref: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter


const { melon_data: song_array } = require("./melon_data");

const result = song_array.filter(song => song.artist === '방탄소년단');

for (const song of result) {
    console.log(song.artist, song.title, song.like);
}

// ▽ 해설

// 값 비교는 ===이 좀더 정확함.
// .filter에 (song)을 써도 되지만 artist를 뽑아올거면 {}안에 넣어야함. 

// const bts_song_array = song_array.filter(
//     ({ artist }) => artist === "방탄소년단"
// );


// for (const song of btssong_array) {
//     console.log(song.like, song.title);
// }