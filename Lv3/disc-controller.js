function solution(jobs) {
  // 우선순위큐(최소힙) 구현하기 - SJF
  let answer = 0;
  let heap = [];
  let i = 0;
  let time = 0;

  // 작업 요청 시점 오름차순 정렬
  jobs.sort((a, b) => a[0] - b[0]);

  // heap이 비어야 일처리가 끝남
  while (jobs.length > i || heap.length) {
    // 작업 요청 시점이 빠른 것부터 heap에 넣기
    if (jobs.length > i && time >= jobs[i][0]) {
      heap.push(jobs[i++]);
      // 걸리는 시간 오름차순 정렬하기
      heap.sort((a, b) => a[1] - b[1]);
      continue;
    }

    if (heap.length) {
      const [start, job] = heap.shift();
      time += job;
      answer += time - start;
    } else {
      // 현재 heap에 도착한 작업이 없을 때 첫 작업을 현재 시간으로 바꿔주기
      time = jobs[i][0];
    }
  }

  return parseInt(answer / jobs.length);
}

console.log(
  solution([
    [0, 3],
    [1, 9],
    [2, 6],
  ])
);

// javascript로 최소힙 class로 구현하기
class MinHeap {
  constructor() {
    this.heap = [null]; // 보통 첫 원소는 사용하지 않으므로 비워두기
  }

  // heap 크기 구하기. 첫 원소는 사용하지 않아서 비워져 있으므로 첫 원소 빼고 계산
  size() {
    return this.heap.length - 1;
  }

  // 최소힙의 최솟값 구하기
  getMin() {
    return this.heap[1] ? this.heap[1] : null;
  }

  // 원소의 값을 비교해서 바꿔주기할 때 필요한 바꿔치기 메서드
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  // heap 삽입 메서드
  insert(value) {
    this.heap.push(value);
    let curIdx = this.heap.length - 1;
    let parentIdx = (curIdx / 2) >> 0;

    // 부모 노드 값과 현재 노드 값을 비교해서 부모 노드 값이 더 작도록
    while (curIdx > 1 && this.heap[parentIdx] > this.heap[curIdx]) {
      this.swap(parentIdx, curIdx);
      curIdx = parentIdx;
      parentIdx = (curIdx / 2) >> 0;
    }
  }

  // heap 삭제 메서드
  delete() {
    // heap 첫 원소가 없기 때문에 항상 root는 heap[1]에 위치
    const min = this.heap[1];

    if (this.heap.length <= 2) this.heap = [null];
    else this.heap[1] = this.heap.pop();

    let curIdx = 1;
    let leftIdx = curIdx * 2;
    let rightIdx = curIdx * 2 + 1;

    // 왼쪽 자식이 없으면 오른쪽 자식도 없이 루트만 있는 상태이므로 바로 반환하도록 한다.
    if (!this.heap[leftIdx]) return min;

    // 오른쪽 자식이 없으면 왼쪽 자식 하나만 있음
    if (!this.heap[rightIdx]) {
      if (this.heap[leftIdx] < this.heap[curIdx]) {
        this.swap(leftIdx, curIdx);
      }
      return min;
    }

    // 왼쪽과 오른쪽 자식 노드가 모두 있는 경우, 현재 노드의 값을 자식 노드들의 값과 비교하기
    while (
      this.heap[leftIdx] < this.heap[curIdx] ||
      this.heap[rightIdx] < this.heap[curIdx]
    ) {
      const minIdx =
        this.heap[leftIdx] > this.heap[rightIdx] ? rightIdx : leftIdx;
      this.swap(minIdx, curIdx);
      curIdx = minIdx;
      leftIdx = curIdx * 2;
      rightIdx = curIdx * 2 + 1;
    }
    return min;
  }
}
