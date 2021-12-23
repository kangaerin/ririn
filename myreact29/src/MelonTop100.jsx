import { useState } from 'react';
import initialSong_List from './data/melon_data.json';
import './MelonTop100.css';

// 전역변수 : 바뀌지 않는 데이터
//      - 초기값을 정의

function MelonTop100() {
  const [songList, setSongList] = useState([]);

  const handleClick = () => {
    setSongList(initialSong_List);
  };

  return (
    <div>
      <h2>멜론 top 100</h2>
      <button onClick={handleClick}>로딩</button>
      <ul className="songList">
        {songList.map((song) => {
          return (
            <li>
              [{song.rank}] {song.title} by {song.artist}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MelonTop100;
