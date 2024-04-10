const aa = Array.from({ length: 1000 }, (_) => 1);

function solution(arr) {
  for (let i = 0; i <= 10; i++) {
    if (arr.length <= Math.pow(2, i)) {
      return arr.concat(
        Array.from({ length: Math.pow(2, i) - arr.length }, (_) => 0)
      );
    }
  }
}

console.log(solution(aa));
