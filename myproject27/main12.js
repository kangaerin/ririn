// TODO: #12 2곡 이상 랭크된 가수는 총 몇 팀인가요?
// reduce

const { melon_data: song_array } = require("./melon_data");

// const artist_count_object = song_array
//     .reduce((acc, { artist }) => {
//         acc[artist] ||= 0
//         acc[artist] += 1;
//         return acc;
//     }, {});


// const total = Object.values(artist_count_object)
//     .filter(count => count >= 2)
//     .length;


// console.log(total);

// -------------------------------------------- ▽ 수업
// reduce는 () => {}까지가 함수임.

const artist_count_object = song_array
    .reduce((acc, { artist }) => {
        // if(!acc[artist]) acc[artist] = 0;

        // node 14
        // acc[artist] = acc[artist] || 0;

        // node 16
        acc[artist] ||= 0;
        // i = i + 1
        // i || = 1
        acc[artist] += 1; // 혹은 ++1
        return acc;
    }, {});

console.log(artist_count_object);

// pthon d.values() = java Object.values

const total = Object.values(artist_count_object)
    .filter(count => count >= 2)
    .length;


console.log(Object.values(artist_count_object));

console.log(total);


// python version
// if artist not in acc:
//  acc[artist] = 0