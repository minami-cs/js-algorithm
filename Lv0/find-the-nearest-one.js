function solution(arr, idx) {
  return arr.findIndex((num, index) => num === 1 && index >= idx);
}
