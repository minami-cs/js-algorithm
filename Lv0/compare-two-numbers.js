function solution(a, b) {
  const target1 = String(a) + String(b);
  const target2 = 2 * a * b;

  if (Number(target1) < target2) {
    return target2;
  } else {
    return Number(target1);
  }
}
