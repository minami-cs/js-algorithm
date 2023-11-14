function solution(rsp) {
  const winner = {
    2: "0",
    0: "5",
    5: "2",
  };

  let answer = "";

  rsp.split("").map((loser) => (answer += winner[loser]));

  return answer;
}
