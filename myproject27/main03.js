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

