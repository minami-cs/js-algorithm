function solution(s) {
  if (s[0] === ")") return false;

  let left = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") left++;
    else if (left < 1 && s[i] === ")") return false;
    else left--;
  }

  return left === 0;
}

console.log(solution("()()"));
console.log(solution("(())()"));
console.log(solution(")()("));
console.log(solution("(()("));
