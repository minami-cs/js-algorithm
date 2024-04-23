function solution(s) {
  let ones = s;
  let binary = "";
  let zeros = 0;
  let count = 0;

  while (binary !== "1") {
    zeros += ones.split("1").join("").length;
    binary = ones.split("0").join("").length.toString(2);
    ones = binary;
    count++;
  }

  return [count, zeros];
}

console.log(solution("110010101001"));
console.log(solution("01110"));
console.log(solution("1111111"));
