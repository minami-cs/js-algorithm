// 스택으로 다시
function solution(priorities, location) {
  let count = 0;
  let targetIdx = location;

  while (true) {
    // 배열의 맨 앞 요소 추출
    let num = priorities.shift();

    console.log(num);
    // 판별함수인 some()을 이용해서 추출한 배열의 맨 앞 요소보다 중요도가 높은 수가 있는지 판별
    if (priorities.some((priority) => priority > num)) {
      // 배열의 맨 앞 요소보다 중요도 높은 수가 있으면 배열의 맨 앞 요소를 배열 맨 뒤로 보냄
      priorities.push(num);
      // 배열의 맨 앞 요소가 중요도가 가장 높을 때
    } else {
      // count 1증가
      count++;
      // 만약 내가 요청한 문서의 위치가 배열 맨 앞일 때
      if (targetIdx === 0) {
        return count;
      }
    }
    // 배열의 맨 앞 요소를 한 번 추출할 때마다 요청한 문서의 위치 하나씩 줄어들도록 함
    targetIdx--;
    // 만약 내가 요청한 문서의 위치가 배열의 맨 뒤로 갔을 때
    if (targetIdx === -1) {
      targetIdx = priorities.length - 1;
    }
  }
}

const priorities1 = [2, 1, 3, 2];
const location1 = 2;

const priorities2 = [1, 1, 9, 1, 1, 1];
const location2 = 0;

console.log(solution(priorities1, location1));
console.log(solution(priorities2, location2));

// 객체를 이용하려고 했던 답안
// function solution(priorities, location) {
//   const maxNum = Math.max(...priorities);
//   const maxIdx = priorities.indexOf(maxNum);
//   let info = [];
//   priorities.map((priority, idx) => {
//     let obj = {};
//     obj["priority"] = priority;
//     obj["origIdx"] = idx;
//     obj["printIdx"] =
//       idx < maxIdx ? priorities.length - maxIdx + idx : idx - maxIdx;
//     info.push(obj);
//   });
//   const answer = info.filter((obj) => obj["origIdx"] === location);
//   return answer[0]["printIdx"] + 1;
// }
