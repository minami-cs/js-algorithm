function solution(n, m) {
  const temp = [n, m].sort((a, b) => b - a);

  // 최대공약수 구하기
  // 유클리드 호제법 이용 a = bq + r이면 gcd(a, b) = gcd(b, r)이다.
  let r = 0;
  let a = temp[0];
  let b = temp[1];

  while (b !== 0) {
    r = a % b;
    a = b;
    b = r;
  }

  // 최소공배수 구하기
  // 공식: 두 수의 곱 / 두 수의 최대공약수

  return [a, (n * m) / a];
}

console.log(solution(3, 12));
