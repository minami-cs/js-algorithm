function solution(n) {
  let result = 0;

  if (n % 2 === 0) {
    for (let i = 0; i <= n; i += 2) {
      result += i ** 2;
    }
    return result;
  } else {
    for (let i = 1; i <= n; i += 2) {
      result += i;
    }
    return result;
  }
}
