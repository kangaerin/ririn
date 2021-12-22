// TODO: #6 "곡명 / 단어수" 배열을 구성해주세요.
// Array의 map 활용
// 100줄에서 한 줄 출력의 예: `Dynamite / 1`

const { melon_data: song_array } = require("./melon_data");


// const song = song_array.filter(song_array => song_array.title)

// function countWords(song) {    
//      let word_count = song.length;}

// const map1 = song_array.map((song) => ({ return `${song.title} / ${word_count}` })
// console.log(map1)



// -------------- 찬들님 코드 

// const mapped_array = song_array.map((song) => ({
//     title: song.title,
//     length: song.title.split(' ').length
// }));
// for (const song of mapped_array) {
//     console.log(`${song.title} / ${song.length}`);
// }


// --------------
// ▽ 해설

// const title_array = song_array
//     .map(({ title }) => `${title} / ${title.split(/\s+/).length}`);


// for (const title of title_array) {
//     console.log(title);
// }

// --------------
// ▽ 해설2

// python의 title.split() : white spaces(보이지 않는 기준 : 스페이스, 탭, 개행 등)을 기준으로 나눠줌.


// 연속된 공백도 하나의 구분자로 표현하려면 정규표현식이 필요함.

// 파이썬에서는 r"\s+" , js에서는 /\s+/ 혹은 RegEx로 정규표현식 표현 
// r"\s" = 모든 white spaces  


// 1개의 song object를 문자열로 변환
// 문자열로 구성된 배열 

// 1)
const title_array1 = song_array.map(
    (song) => {
        const word_count = song.title.trim().split(/\s+/).length;
        return `${song.title} / ${word_count}`;
    },
);


// 오브젝트로 구성된 배열 
// 기존 song_array 배열에서 word_count라는 컬럼을 추가하고 싶음. 
// 2)
const new_song_array = song_array.map(
    (song) => {
        const word_count = song.title.trim().split(/\s+/).length;
        return {
            ...song,
            work_count: word_count,
        };
    },
);

for(const new_song of new_song_array){
    console.log(new_song); // 기존 song, word_count 컬럼  
}


