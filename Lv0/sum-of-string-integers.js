function solution(num_str) {
  return num_str
    .split("")
    .reduce((prev, curr) => Number(prev) + Number(curr), 0);
}
