function solution(tickets) {
  // DFS로 풀어보자
  let answer = [];
  const result = [];
  const visited = Array.from({ length: tickets.length }, () => false);

  // 두 가지 루트가 있을 경우에는 알파벳순으로니까 일단 오름차순 정렬해주기
  tickets.sort();

  // 시작할 공항과 길이만큼 다 돌았는지 여부를 알기 위해 count를 인자로 받기
  const dfs = (airport, count) => {
    // 시작 공항
    result.push(airport);

    // count가 tickets길이만큼 다 돌았을 때 처리
    if (count === tickets.length) {
      answer = result;
      return true;
    }

    for (let i = 0; i < tickets.length; i++) {
      if (!visited[i] && tickets[i][0] === airport) {
        // 현재 공항 방문 처리
        visited[i] = true;

        // 현재 공항의 도착 공항을 시작으로 재귀적 방문 처리
        // 하나씩 방문 공항이 늘어나므로 count 숫자도 1개씩 늘려주기
        // 만약 false를 반환할 경우에는 방문 취소 처리 단계로 넘어감
        if (dfs(tickets[i][1], count + 1)) return true;

        // 현재 방문한 공항 방문 취소 처리
        visited[i] = false;
      }
    }
    // 전체 경로가 다 visited 처리되지 않고 중간에 false가 나온 경우 올바른 경로가 아니므로 제거 및 false 처리
    result.pop();
    return false;
  };

  // 시작은 무조건 ICN
  dfs("ICN", 0);

  return answer;
}

console.log(
  solution([
    ["ICN", "JFK"],
    ["HND", "IAD"],
    ["JFK", "HND"],
  ])
);
console.log(
  solution([
    ["ICN", "SFO"],
    ["ICN", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "ICN"],
    ["ATL", "SFO"],
  ])
);
