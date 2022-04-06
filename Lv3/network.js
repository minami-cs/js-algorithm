function solution(n, computers) {
  // DFS 활용하기
  let answer = 0;
  let visited = Array.from({ length: computers.length }, () => false);

  const dfs = (v) => {
    // 방문한 노드는 방문처리
    visited[v] = true;

    for (let i = 0; i < computers[v].length; i++) {
      // computers[v][i]가 연결되어 있음을 나타내는 1이고 아직 방문하지 않았을 때 방문처리
      if (computers[v][i] === 1 && !visited[i]) {
        dfs(i);
      }
    }
  };

  for (let i = 0; i < computers.length; i++) {
    if (!visited[i]) {
      dfs(i);
      // dfs를 새로 호출할 때마다 노드가 연결되어 있지 않고 떨어져있음을 의미하므로 dfs 호출 갯수를 세어준다.
      answer++;
    }
  }

  return answer;
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);
console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ])
);
