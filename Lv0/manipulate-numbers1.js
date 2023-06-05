// 풀이 1
function solution(n, control) {
  const controller = { w: 1, s: -1, d: 10, a: -10 };
  let answer = n;

  for (let i = 0; i < control.length; i++) {
    answer += controller[control[i]];
  }

  return answer;
}

// 풀이 2
function solution(n, control) {
  const controller = { w: 1, s: -1, d: 10, a: -10 };

  for (let i = 0; i < control.length; i++) {
    n += controller[control[i]];
  }

  return n;
}
