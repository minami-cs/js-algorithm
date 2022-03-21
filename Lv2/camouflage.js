function solution(clothes) {
  let clothing = {};
  let result = 1;
  for (let i = 0; i < clothes.length; i++) {
    clothing[clothes[i][1]] = (clothing[clothes[i][1]] || 1) + 1;
    // 하나씩 선택했을 때의 경우의 수와 아무것도 선택하지 않았을 때의 경우의 수를 처음부터 각각 더해두기
  }
  if (Object.keys(clothing).length > 1) {
    for (let key in clothing) {
      result *= clothing[key]; // 경우의 수 곱해서 구하기
    }
    result = result - 1; // 아무것도 선택하지 않았을 때의 경우의 수 빼기
  } else {
    result = Object.values(clothing)[0] - 1; // 아무것도 선택하지 않았을 때의 경우의 수 빼기
  }
  return result;
}

const clothes1 = [
  ["yellowhat", "headgear"],
  ["bluesunglasses", "eyewear"],
  ["green_turban", "headgear"],
];
const clothes2 = [
  ["crowmask", "face"],
  ["bluesunglasses", "face"],
  ["smoky_makeup", "face"],
];

console.log(solution(clothes1));
console.log(solution(clothes2));
