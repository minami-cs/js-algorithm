function solution(arr) {
  const row = arr.length;
  const column = arr[0].length;

  if (row > column) {
    return arr.map((item) =>
      item.concat(Array.from({ length: row - column }, (_) => 0))
    );
  }
  if (row < column) {
    for (let i = 0; i < column - row; i++) {
      arr.push(Array.from({ length: column }, (_) => 0));
    }
  }
  return arr;
}

console.log(
  solution([
    [572, 22, 37],
    [287, 726, 384],
    [85, 137, 292],
    [487, 13, 876],
  ])
);
console.log(
  solution([
    [57, 192, 534, 2],
    [9, 345, 192, 999],
  ])
);
console.log(
  solution([
    [1, 2],
    [3, 4],
  ])
);
