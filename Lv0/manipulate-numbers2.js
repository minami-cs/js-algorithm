function solution(numLog) {
  const controller = { w: 1, s: -1, d: 10, a: -10 };
  const controllerKeys = Object.keys(controller);
  const controllerValues = Object.values(controller);
  let answer = "";

  for (let i = 1; i < numLog.length; i++) {
    const index = controllerValues.indexOf(numLog[i] - numLog[i - 1]);
    answer += controllerKeys[index];
  }

  return answer;
}

console.log(solution([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]));
