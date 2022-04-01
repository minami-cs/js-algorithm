function solution(people, limit) {
  // 몸무게를 내림차순 정렬해서 양쪽 끝에 포인터를 두는 투 포인터처럼 해결해보자
  people.sort((a, b) => b - a);
  let left = 0;
  let right = people.length - 1;
  let count = 0;

  while (left <= right) {
    // 양쪽 끝 사람 두 명씩 몸무게를 더해서 해당 몸무게와 limit을 비교
    let sum = people[left] + people[right];
    if (sum > limit) {
      // 두 명의 몸무게 합이 limit을 초과하면 왼쪽 사람(몸무게 많이 나가는 사람) 혼자 보트 태우기
      left++;
    } else {
      // 두 명의 몸무게 합이 limit 이하이면 두 사람 한 번에 보트 태우기
      left++;
      right--;
    }
    // 보트 갯수는 무조건 하나씩 더해지도록
    count++;
  }
  return count;
}

console.log(solution([70, 50, 80, 50], 100));
console.log(solution([70, 80, 50], 100));
