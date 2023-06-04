function solution(num_list) {
  const sum = num_list.reduce((prev, curr) => prev + curr, 0);
  const product = num_list.reduce((prev, curr) => prev * curr, 1);

  return Number(product < sum ** 2);
}

solution([3, 4, 5, 2, 1]);
