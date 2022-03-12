function solution(numbers, hand) {
  let result = [];
  let left = [1, 4, 7];
  let right = [3, 6, 9];
  let middle = [2, 5, 8, 0];
  let c_left = [10, 3];
  let c_right = [12, 3];

  for (let i = 0; i < numbers.length; i++) {
    let currentVal = numbers[i];
    if (numbers[i] === middle[3]) currentVal = 11;
    if (left.includes(numbers[i])) {
      result.push("L");
      c_left = [currentVal, left.indexOf(numbers[i])];
    } else if (right.includes(numbers[i])) {
      result.push("R");
      c_right = [currentVal, right.indexOf(numbers[i])];
    } else {
      let d_left =
        Math.abs(currentVal - c_left[0]) % 3 === 0
          ? parseInt(Math.abs(currentVal - c_left[0]) / 3)
          : Math.abs(middle.indexOf(numbers[i]) - c_left[1]) + 1;
      let d_right =
        Math.abs(currentVal - c_right[0]) % 3 === 0
          ? parseInt(Math.abs(currentVal - c_right[0]) / 3)
          : Math.abs(middle.indexOf(numbers[i]) - c_right[1]) + 1;
      if (d_left < d_right) {
        result.push("L");
        c_left = [currentVal, middle.indexOf(numbers[i])];
      } else if (d_left > d_right) {
        result.push("R");
        c_right = [currentVal, middle.indexOf(numbers[i])];
      } else {
        if (hand === "left") {
          result.push("L");
          c_left = [currentVal, middle.indexOf(numbers[i])];
        } else {
          result.push("R");
          c_right = [currentVal, middle.indexOf(numbers[i])];
        }
      }
    }
  }
  return result.join("");
}

const numbers1 = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
const hand1 = "right";

const numbers2 = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2];
const hand2 = "left";

const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const hand3 = "right";

console.log(solution(numbers1, hand1));
// console.log(solution(numbers2, hand2));
// console.log(solution(numbers3, hand3));
