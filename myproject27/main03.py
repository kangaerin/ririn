
# TODO: #3 좋아요수 top10을 출력
# Array의 sort 활용
# 출력포맷 : `[좋아요수] 곡명 가수명`

import json

with open("melon_data.json", "rt", encoding="utf-8") as f:
    song_list = json.loads(f.read())

song_list.sort(key=lambda song: song['like'], reverse=True)

for (index, song) in enumerate(song_list[:10], 1):
    print("{index} [{like}] {title} by {artist}".format(index=index, **song))