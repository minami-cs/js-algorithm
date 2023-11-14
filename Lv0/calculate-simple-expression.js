function solution(binomial) {
  // 구조분해할당을 이용해보자
  const [a, op, b] = binomial.split(" ");

  const operator = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
  };

  return operator[op](Number(a), Number(b));
}
