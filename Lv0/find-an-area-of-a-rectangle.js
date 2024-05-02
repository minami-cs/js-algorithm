function solution(dots) {
  dots.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

  return (dots[2][0] - dots[0][0]) * (dots[1][1] - dots[0][1]);
}

console.log(
  solution([
    [1, 1],
    [2, 1],
    [2, 2],
    [1, 2],
  ])
);
console.log(
  solution([
    [-1, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
  ])
);
