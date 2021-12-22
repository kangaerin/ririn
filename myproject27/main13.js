// TODO: #13 방탄소년단의 곡 중에 좋아요 수가 가장 큰 곡명은?
// Array의 filter와 reduce를 활용해주세요.

const { melon_data: song_array } = require("./melon_data");



// const top_like_song = song_array
//     .filter(({ artist }) => artist === "방탄소년단")
//     .reduce((acc, song) => {
//         if ( !acc || acc.like < song.like )
//             return song;
//         return acc;
//     }, null);


// console.log(top_like_song);

// -------------------------------------------- ▽ 수업

// 1)
// acc : null 곡1.like = 100  => 곡1 
// acc : 곡1(100) 곡2.lsie = 200 => 곡2

// const top_song = song_array
//     .filter(({ artist }) => artist === "방탄소년단")
//     .reduce((acc, song) => {
//         if (!acc) return song;
//         if (acc.like < song.like)
//             return song;
//         else
//             return acc;
//     }, null);

//     // 2)

// const top_song2 = song_array
//     .filter(({ artist }) => artist === "방탄소년단")
//     .reduce((acc, song) => {
//         return acc.like < song.like ? song : acc;
//     });

// console.log(top_song2)


// -----------------------------------

Array.prototype.max = function(ket_fn){
    return this.reduce((acc, song) => {
        return ket_fn(acc) < ket_fn(song) ? song : acc;
        
    });
};

Array.prototype.min = function(ket_fn){
    return this.reduce((acc, song) => {
        return ket_fn(acc) > ket_fn(song) ? song : acc;
    });
};

const top_song3 = song_array
    .filter(({ artist }) => artist === "방탄소년단")
    .min(song => song.rank);

const top_song4 = song_array
    .filter(({ artist }) => artist === "방탄소년단")
    .max(song => song.rank);

console.log(top_song3)
console.log(top_song4)