function solution(n, times) {
  times.sort((a, b) => a - b);
  let left = 0;
  let right = times[times.length - 1] * n;
  let middle = Math.floor((right + left) / 2);

  while (left <= right) {
    const count = times.reduce(
      (prev, cur) => prev + Math.floor(middle / cur),
      0
    );
    // n보다 count가 크거나 같으면 최댓값인 right는 middle - 1을 해주고
    if (n <= count) right = middle - 1;
    // count가 n보다 작으면 최솟값인 left는 middle + 1을 해준다
    else if (count < n) left = middle + 1;
    middle = Math.floor((right + left) / 2);
  }
  return left;
}

console.log(solution(6, [7, 10]));
