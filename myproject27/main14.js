// TODO: #14 방탄소년단의 곡 중에 좋아요 수가 가장 작은 곡명은?
// Array의 filter와 reduce를 활용해주세요.

const { melon_data: song_array } = require("./melon_data");

const top_like_song = song_array
    .filter(({ artist }) => artist === "방탄소년단")
    .reduce((acc, song) => {
        if ( !acc || acc.like > song.like )
            return song;
        return acc;
    }, null);


console.log(top_like_song);

// -------------------------------------------- ▽ 수업
const top_song2 = song_array
    .filter(({ artist }) => artist === "방탄소년단")
    .reduce((acc, song) => {
        return acc.like > song.like ? song : acc;
    });

console.log(top_song2)