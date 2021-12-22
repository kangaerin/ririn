// TODO: #3 좋아요수 top10을 출력
// Array의 sort 활용
// 출력포맷 : `[좋아요수] 곡명 가수명`



const { melon_data: song_array } = require("./melon_data");

song_array.sort(function(a, b) {
    return b.like - a.like;
});

const top10 = song_array.slice(0,10);

for (const song of top10) {
    console.log(song.like, song.title, song.artist);
}

// ▽ 해설
// 1) 좋아요 수에 대한 내림차순 정렬 > 처음 10개
// 2) 좋아요 수에 대한 오름차순 정렬 > 마지막 10개 > 뒤집음

// 두번째가 클 경우 양수를 리턴하면 내림차순이 됨. 


// const top10_song_array = song_array.sort(
//     (song1, song2) => song2.like - song1.like
// ).slice(0, 10);

// slice 10이라고 쓰면 10번 인덱스부터 끝까지 옴. (처음, 끝)을 지정해줘야함.

// entries는 시작값을 정해줘야함. 
// for (const [index, song] of top10_song_array.entries()) {
//     const rank = index + 1;
//     console.log(`${rank} [${song.like}] ${song.title} by ${song.artist}`);
// }


// for (const [index, {like, title, artist}] of top10_song_array.entries()) {
//     const rank = index + 1;
//     console.log(`${rank} [${like}] ${title} by ${artist}`);
// }