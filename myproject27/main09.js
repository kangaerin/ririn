// TODO: #9 좋아요수가 200,000이상인 곡들의 곡명 리스트를 만들어보세요.
// Array의 filter와 map 활용

const { melon_data: song_array } = require("./melon_data");

const filtered_title_array = song_array
  .filter(({ like }) => like >= 200_000)
  .map(({ title }) => title);

// map으로 title을 filtered_titled_array가 title만 가져오게 한다는 것인지

// for (const title of filtered_title_array) {
//   console.log(title);
// }
console.log(filtered_title_array);
