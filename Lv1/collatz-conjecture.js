function solution(num) {
  let result = 0;

  if (num === 1) return result;

  while (num > 1) {
    if (num % 2 === 0) {
      num /= 2;
      result += 1;
    } else {
      num = num * 3 + 1;
      result += 1;
    }

    if (result >= 500) {
      return -1;
    }
  }

  return result;
}
