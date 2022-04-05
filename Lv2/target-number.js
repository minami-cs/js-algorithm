function solution(numbers, target) {
  let answer = 0;

  // DFS로 풀기
  // 트리에서 왼쪽 서브트리로 가는 것은 +, 오른쪽 서브트리로 가는 것은 -
  const dfs = (level, sum) => {
    if (level === numbers.length) {
      if (sum === target) {
        answer++;
      }
      return;
    }

    // 왼쪽으로
    dfs(level + 1, sum + numbers[level]);
    // 오른쪽으로
    dfs(level + 1, sum - numbers[level]);
  };

  dfs(0, 0);

  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));
console.log(solution([4, 1, 2, 1], 4));
