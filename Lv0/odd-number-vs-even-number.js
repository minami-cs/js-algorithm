function solution(num_list) {
  let evenNum = 0;
  let oddNum = 0;

  num_list.map((num, idx) =>
    idx % 2 === 0 ? (evenNum += num) : (oddNum += num)
  );

  return evenNum <= oddNum ? oddNum : evenNum;
}
