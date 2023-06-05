function solution(num_list) {
  let answer = [...num_list];
  const lastIndex = num_list.length - 1;
  const isLarger = num_list[lastIndex] > num_list[lastIndex - 1];

  isLarger
    ? answer.push(num_list[lastIndex] - num_list[lastIndex - 1])
    : answer.push(num_list[lastIndex] * 2);

  return answer;
}

console.log(solution([5, 2, 1, 7, 5]));
