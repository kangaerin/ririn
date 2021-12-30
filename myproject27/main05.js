// TODO: #5 좋아요수가 200,000이상인 곡명에 대해서, 곡명 오름차순 정렬
// Array의 filter와 sort를 연계
// 출력포맷 : `[좋아요수] 곡명 가수명`

const { melon_data: song_array } = require("./melon_data");

const result = song_array.filter((song) => song.like >= 200000);
// 좋아요 수 200,000 이상인 곡 필터링

const result1 = result.sort(function (a, b) {
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

//▽ 해설
// const compare_string = (string1, string2, is_ascending=true) => {
//   if ( string1 < string2 ) return is_ascending ? -1 : 1;
//   else if ( string1 > string2 ) return is_ascending ? 1 : -1;
//   else return 0;
// };

// const popular_song_array = song_array
//   .filter(({ like }) => like >= 200_000)
//   .sort((song1, song2) => compare_string(song1.title, song2.title, true));

// JS 에서는 문자열끼리 -를 하면 NaN = 계산을 할 수 없음이 뜸.
// 대신 < >로 True, False로 가능. / 문자>숫자 매핑 테이블 => 문자열 인코딩

// for (const { like, title, artist } of popular_song_array) {
//   console.log(`[${like}] ${title} ${artist}`);
// }

// 오름차순
// song1이 song2보다 크다면, 음수를 반환
// song1이 song2보다 작다면, 양수를 반환
// 내림차순
// song1이 song2보다 작다면, 양수를 반환
// song1이 song2보다 크다면, 음수를 반환
// 같다면 0을 반환

// function compare_string_for_sort(string1, string2, is_ascending = True) {
//   if (string1 < sting2){
//     // 3항 연산자(c, c++, java등에 있음)
//     is_ascending ? -1 : 1; // is_ascending이 참이라면 -1, 거짓이라면 1을 반환
//   }
//   else if (string1>string2){
//     return is_ascending ? 1 : -1;
//   }
//   else{
//     return 0;
//   }
// }
