// 효율성 시간초과 - splice() 메서드가 시간복잡도가 높음
// function solution(participant, completion) {
//   completion.forEach((player) => {
//     if (participant.indexOf(player) !== -1)
//       participant.splice(participant.indexOf(player), 1);
//   });
//   return participant[0];
// }

function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) return participant[i];
  }
}

const participant1 = ["leo", "kiki", "eden"];
const completion1 = ["eden", "kiki"];

const participant2 = ["marina", "josipa", "nikola", "vinko", "filipa"];
const completion2 = ["josipa", "filipa", "marina", "nikola"];

const participant3 = ["mislav", "stanko", "mislav", "ana"];
const completion3 = ["stanko", "ana", "mislav"];

console.log(solution(participant1, completion1));
console.log(solution(participant2, completion2));
console.log(solution(participant3, completion3));
