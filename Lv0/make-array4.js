function solution(arr) {
  const stk = [];

  let i = 0;
  while (i < arr.length) {
    if (stk.length === 0) {
      stk.push(arr[i]);
      i++;
    } else {
      const lastItem = stk[stk.length - 1];

      if (lastItem < arr[i]) {
        stk.push(arr[i]);
        i++;
      } else {
        stk.splice(stk.length - 1);
        // 여기서는 i에 변화가 없는 것 유의
      }
    }
  }

  return stk;
}

solution([1, 4, 2, 5, 3]);
