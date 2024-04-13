function solution(myStr) {
  const answer = myStr
    .replace(/[a||b||c]/g, " ")
    .trim("")
    .split(" ")
    .filter((item) => item.length > 0);

  return answer.length > 0 ? answer : ["EMPTY"];
}

console.log(solution("baconlettucetomato"));
console.log(solution("abcd"));
console.log(solution("cabab"));
console.log(solution("dabd"));
