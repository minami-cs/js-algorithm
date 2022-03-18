function solution(absolutes, signs) {
  let sum = 0;
  for (let i = 0; i < signs.length; i++) {
    if (signs[i] === false) sum += absolutes[i] * -1;
    else sum += absolutes[i];
  }
  return sum;
}

const absolutes1 = [4, 7, 12];
const signs1 = [true, false, true];

const absolutes2 = [1, 2, 3];
const signs2 = [false, false, true];

console.log(solution(absolutes1, signs1));
console.log(solution(absolutes2, signs2));
