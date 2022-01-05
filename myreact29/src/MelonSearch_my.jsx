// import { Input, Table, Tag, Space } from 'antd';
// import { useState } from 'react';

// import Axios from 'axios';
// import jsonAdapter from 'axios-jsonp';
// import Avatar from 'antd/lib/avatar/avatar';

// function MelonSearch() {
//   const [query, setQuery] = useState('');
//   const [songList, setSongList] = useState([]);

//   const handleChange = (e) => {
//     const {
//       target: { value },
//     } = e;
//     console.group('handleChange');
//     console.log(value);
//     console.groupEnd();
//     setQuery(value);
//   };
//   const handlePreessEnter = () => {
//     console.group('handlePreessEnter');
//     console.log(`검색어 ${query}로 검색합니다.`);
//     console.groupEnd();

//     const url = 'https://www.melon.com/search/keyword/index.json';

//     Axios({
//       url: url,
//       adapter: jsonAdapter,
//       callbackParamName: 'jscallback',
//       params: {
//         query: query,
//       },
//     })
//       .then((response) => {
//         // ALBUMCONTENTS, ARTISTCONTENTS
//         const {
//           data: { SONGCONTENTS: searchedSongList },
//         } = response;

//         console.group('멜론 검색결과');
//         console.log(response);
//         console.log(searchedSongList);
//         console.groupEnd();

//         setSongList(searchedSongList);
//       })
//       .catch((error) => {
//         console.group('멜론 검색 에러');
//         console.log(error);
//         console.groupEnd();
//       });
//   };

//   return (
//     <div
//       style={{
//         height: '70px',
//         width: 500,
//         margin: '0 auto',
//         color: '#000',
//         lineHeight: '120px',
//         textAlign: 'center',
//         background: '#364d79',
//       }}
//     >
//       <h5> ♬ </h5>
//       <h3> 멜론 검색 </h3>
//       <Input
//         placeholder="검색어를 입력해주세요."
//         onChange={handleChange}
//         onPressEnter={handlePreessEnter}
//       />
//       {songList.map((song) => {
//         return (
//           <div style={{ margin: '0' }}>
//             <Avatar src={song.ALBUMIMG} />
//             {song.SONGNAME} by {song.ARTISTNAME}
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default MelonSearch;
