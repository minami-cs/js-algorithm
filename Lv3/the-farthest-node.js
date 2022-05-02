function solution(n, edge) {
  // 최단거리 -> BFS로 풀기
  let answer = 0;
  const queue = [];
  const visited = Array.from({ length: n + 1 }, () => false);

  return answer;
}

console.log(
  solution(6, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ])
);
