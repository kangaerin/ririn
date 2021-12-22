// TODO: #1 like 오름차순으로 정렬
// 출력포맷 : `[좋아요수] 곡명`
// Array의 sort 활용
// ref: 

const { melon_data: song_array } = require("./melon_data");

song_array.sort(function(a, b) {
    return a.like - b.like;
});

for (const song of song_array) {
    console.log(song.like, song.title);
}


// ▽ 해설

// Array의 sort는 자신(array)의 순서도 변경하고 자신을 반환함.
// python의 list sort는 자신(list)의 순서만 변경하고 리턴값이 없음(None)

// => function에서는 {}를 사용 안함. {}는 함수의 시작이기 때문에 return문이 필요함.

song_array.sort(
    (song1, song2) => song1.like - song2.like,
    // song2가 크면 음수를 반환
    // song1이 크면 양수를 반환
    // 같으면 0을 반환
);

// 1)
for (const song of song_array) {
    console.log(song.like, song.title);
}

// 2)
for (const { like, title} of song_array) {
    console.log(like, title);
}
