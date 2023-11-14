function solution(n) {
  // 소수 찾기 - 에라토스테네스의 체 이용하기
  // const isPrime = (number) => {
  //   // 0, 1 처리
  //   if (number < 2) return false;
  //   // 2 처리
  //   if (number === 2) return true;
  //   for (let i = 2; i < Math.sqrt(number) + 1; i++) {
  //     if (number % i === 0) return false;
  //   }
  //   return true;
  // };
  const answer = [];

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) answer.push(i);
  }

  return Number.isInteger(Math.sqrt(n))
    ? answer.length * 2 - 1
    : answer.length * 2;
}
