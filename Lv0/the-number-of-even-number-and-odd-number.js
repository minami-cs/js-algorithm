function solution(num_list) {
  let answer = [0, 0];

  num_list.map((num) => (num % 2 === 0 ? (answer[0] += 1) : (answer[1] += 1)));

  return answer;
}
