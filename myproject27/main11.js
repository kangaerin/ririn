// TODO: #11 멜론 top100 리스트에 랭크된 가수는 총 몇 팀인가요?
// Set와 속성 .size를 활용
// ref: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set

const { melon_data: song_array } = require("./melon_data");


const artist_array = song_array.map(({ artist }) => artist);
const total1 = new Set(artist_array).size;

console.log(`랭크된 가수는 ${total1}팀입니다.`);
// array는 .length set은 .size set은 중복이 자동으로 제거되기 때문에.
// 어떤 타입에서 어떤 함수가 적용되는지를 확인해야함.


const total2 = song_array
    .reduce((acc, { artist }) => {
        acc.add(artist);
        return acc;
    }, new Set())
    .size;

console.log(`랭크된 가수는 ${total2}팀입니다.`);

// map을 주석 처리하면 .reduce((acc, {artist}) => { 이 됨. 
const total3 = song_array
    .map(({artist}) => artist)
    .reduce((acc, artist) => {
        acc.add(artist);
        return acc;
    }, new Set())
    .size;

console.log(`랭크된 가수는 ${total3}팀 입니다.`)