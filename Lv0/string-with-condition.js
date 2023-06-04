function solution(ineq, eq, n, m) {
  if (eq === "!") {
    return ineq === "<" ? Number(n < m) : Number(n > m);
  } else {
    return ineq === "<" ? Number(n <= m) : Number(n >= m);
  }
}
