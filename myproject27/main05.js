
// TODO: #5 좋아요수가 200,000이상인 곡명에 대해서, 곡명 오름차순 정렬
// Array의 filter와 sort를 연계
// 출력포맷 : `[좋아요수] 곡명 가수명`


const { melon_data: song_array } = require("./melon_data");

const result = song_array.filter(song => song.like >=200000 );
// 좋아요 수 200,000 이상인 곡 필터링 

const result1 = result.sort(function(a, b) {
    var titleA = a.title.toUpperCase(); // ignore upper and lowercase
    var titleB = b.title.toUpperCase(); // ignore upper and lowercase
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
});

for (const song of result1) {
    console.log(song.like, song.title, song.artist);
}

