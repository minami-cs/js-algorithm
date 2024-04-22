function solution(arr) {
  const answer = [];
  let prev = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) answer.push(arr[i]);
    if (prev !== arr[i]) {
      answer.push(arr[i]);
      prev = arr[i];
    }
  }

  return answer;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
console.log(solution([4, 4, 4, 3, 3]));
