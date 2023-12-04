function solution(num_list) {
  let answer = 0;

  num_list.map((num) => {
    while (num > 1) {
      num = num % 2 === 0 ? num / 2 : (num - 1) / 2;
      answer++;
    }
  });

  return answer;
}
