function solution(distance, rocks, n) {
  let min = 0;
  let left = 1;
  let right = distance;

  // 이분탐색을 위해 오름차순 정렬해주기
  rocks.sort((a, b) => a - b);

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    let count = 0;
    let curr = 0;

    for (let i = 0; i < rocks.length; i++) {
      // 중간값보다 작으면 count 증가
      if (rocks[i] - curr < middle) {
        count++;
      } else {
        // 중간값보다 크면 현재 징검다리 값 바꾸기
        curr = rocks[i];
      }
    }

    if (count > n) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  min = right;

  return min;
}

console.log(solution(25, [2, 14, 11, 21, 17], 2));
