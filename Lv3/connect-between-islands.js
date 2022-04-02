function solution(n, costs) {
  // 최소 신장 트리를 찾는 크루스칼 알고리즘 (그리디 알고리즘의 한 종류) 사용하기
  let cost = 0;

  // 부모 테이블 초기화
  const parent = Array.from({ length: n + 1 }, () => 0);

  // 부모를 자기 자신으로 초기화
  for (let i = 1; i < n + 1; i++) {
    parent[i] = i;
  }

  // 비용 기준 오름차순 정렬하기
  costs.sort((a, b) => a[2] - b[2]);

  // 간선 하나씩 확인하며 사이클이 발생하지 않는 경우에만 집합에 포함하기
  for (let i = 0; i < costs.length; i++) {
    if (findParent(parent, costs[i][0]) !== findParent(parent, costs[i][1])) {
      unionParent(parent, costs[i][0], costs[i][1]);
      cost += costs[i][2];
    }
  }

  return cost;
}

// 특정 원소가 속한 집합 찾기
const findParent = (parent, x) => {
  if (parent[x] !== x) {
    parent[x] = findParent(parent, parent[x]);
  }
  return parent[x];
};

// 두 원소가 속한 집합 합치기
const unionParent = (parent, a, b) => {
  const num1 = findParent(parent, a);
  const num2 = findParent(parent, b);

  if (num1 < num2) {
    parent[num2] = num1;
  } else {
    parent[num1] = num2;
  }
};

console.log(
  solution(4, [
    [0, 1, 1],
    [0, 2, 2],
    [1, 2, 5],
    [1, 3, 1],
    [2, 3, 8],
  ])
);
