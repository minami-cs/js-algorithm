function solution(a, b) {
  console.log("a", a);
  console.log("b", b);
  return String(BigInt(a) + BigInt(b));
}

console.log(solution("582", "734"));
console.log(solution("18446744073709551615", "287346502836570928366"));
console.log(solution("0", "0"));
