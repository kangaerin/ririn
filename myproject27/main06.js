// TODO: #6 "곡명 / 단어수" 배열을 구성해주세요.
// Array의 map 활용
// 100줄에서 한 줄 출력의 예: `Dynamite / 1`

const { melon_data: song_array } = require("./melon_data");


// const song = song_array.filter(song_array => song_array.title)

// function countWords(song) {    
//      let word_count = song.length;}

// const map1 = song_array.map((song) => ({ return `${song.title} / ${word_count}` })
// console.log(map1)


const mapped_array = song_array.map((song) => ({
    title: song.title,
    length: song.title.split(' ').length
}));
for (const song of mapped_array) {
    console.log(`${song.title} / ${song.length}`);
}
