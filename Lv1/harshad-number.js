function solution(x) {
  const sum = x
    .toString()
    .split("")
    .reduce((prev, curr) => prev + Number(curr), 0);

  return x % sum === 0;
}
