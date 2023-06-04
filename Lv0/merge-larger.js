function solution(a, b) {
  const tempStr1 = String(a) + String(b);
  const tempStr2 = String(b) + String(a);

  if (Number(tempStr1) < Number(tempStr2)) {
    return Number(tempStr2);
  } else {
    return Number(tempStr1);
  }
}
