function solution(begin, target, words) {
  // BFS로 풀기
  let answer = 0;
  const queue = [];
  const visited = [];

  // words 배열에 target 단어가 있는지 여부부터 판별
  if (!words.includes(target)) return answer;

  // 루트 먼저 추가하기 - count 숫자도 배열형태로 같이 넣어주기
  queue.push([begin, answer]);

  while (queue) {
    // queue 첫 번째 요소 꺼내기
    let [v, cnt] = queue.shift();

    // queue에서 꺼낸 단어가 target이랑 일치하면 stop
    if (v === target) return cnt;

    // 단어의 각 철자 하나씩을 순회하면서 하나만 다른 경우 확인
    words.forEach((word) => {
      let diff = 0;

      // 이미 방문했던 단어는 통과
      if (visited.includes(word)) return;

      // 철자가 몇 개 다른지 체크
      for (let i = 0; i < word.length; i++) {
        if (word[i] !== v[i]) diff++;
      }

      if (diff === 1) {
        // 철자가 하나만 다를 경우 queue에 넣어주기
        queue.push([word, ++cnt]);
        // 방문처리 하기
        visited.push(word);
      }
    });
  }
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"]));
