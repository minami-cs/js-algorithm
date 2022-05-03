function solution(n, edge) {
  // 최단거리 -> BFS로 풀기
  return bfs(1, edge, n);
}

const bfs = (start, nodes, end) => {
  const queue = [start];
  const visited = Array.from({ length: end + 1 }, () => false);
  const distance = Array.from({ length: end + 1 }, () => 0);

  visited[start] = true;

  while (queue.length) {
    const curr = queue.shift();
    const d = distance[curr] + 1;

    for (let node of nodes) {
      if (node[0] === curr && !visited[node[1]]) {
        queue.push(node[1]);
        visited[node[1]] = true;
        distance[node[1]] = d;
      } else if (node[1] === curr && !visited[node[0]]) {
        queue.push(node[0]);
        visited[node[0]] = true;
        distance[node[0]] = d;
      }
    }
  }
  const maxDistance = Math.max.apply(null, distance);
  return distance.filter((d) => d === maxDistance).length;
};

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
