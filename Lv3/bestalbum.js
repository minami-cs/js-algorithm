function solution(genres, plays) {
  let playlist = {};
  let temptotal = {};
  let totalplays = [];
  let result = [];
  for (let i = 0; i < genres.length; i++) {
    if (!playlist[genres[i]]) playlist[genres[i]] = [];
    if (!temptotal[genres[i]]) temptotal[genres[i]] = 0;
    playlist[genres[i]].push({
      number: i,
      count: plays[i],
    });
    temptotal[genres[i]] += plays[i];
  }

  // 장르별 전체 플레이수 내림차순 정렬 및 객체 사용을 편하게 하기 위해 다시 객체 만들기
  for (let [key, value] of Object.entries(temptotal)) {
    totalplays.push({
      genre: key,
      totalcount: value,
    });
  }
  totalplays.sort((a, b) => b.totalcount - a.totalcount);

  for (let key in playlist) {
    playlist[key].sort((a, b) => b.count - a.count);
  }

  // 장르별 곡수가 1개일 때는 1개만, 2개 이상일 때 2개만
  for (let i = 0; i < totalplays.length; i++) {
    result.push(playlist[totalplays[i]["genre"]][0]["number"]);
    if (playlist[totalplays[i]["genre"]].length > 1)
      result.push(playlist[totalplays[i]["genre"]][1]["number"]);
  }
  return result;
}

const genres = ["classic", "pop", "classic", "classic", "pop"];
const plays = [500, 600, 150, 800, 2500];

console.log(solution(genres, plays));
// 객체 모양 이렇게 만들기
// playlist = {
//   classic: [
//     {
//       number: 0,
//       count: 500,
//     },
//     {
//       number: 2,
//       count: 150,
//     },
//     {
//       number: 3,
//       count: 800,
//     },
//   ],
//   pop: [
//     {
//       number: 1,
//       count: 600,
//     },
//     {
//       number: 4,
//       count: 2500,
//     },
//   ],
// };
