function solution(n) {
  const divisors = [];

  for (let i = 0; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      divisors.push(i);
      if (n / i !== i) {
        divisors.push(n / i);
      }
    }
  }

  console.log(divisors);

  return divisors.reduce((prev, curr) => prev + curr, 0);
}
