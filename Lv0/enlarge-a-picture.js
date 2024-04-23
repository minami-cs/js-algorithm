function solution(picture, k) {
  return picture
    .map((item) => {
      let temp = "";

      for (let i = 0; i < item.length; i++) {
        temp += item[i].repeat(k);
      }

      return Array.from({ length: k }, (_) => "").fill(temp);
    })
    .flat(); // flat()은 n차원 배열을 1차원으로 평타화해주는 메소드
}

console.log(
  solution(
    [
      ".xx...xx.",
      "x..x.x..x",
      "x...x...x",
      ".x.....x.",
      "..x...x..",
      "...x.x...",
      "....x....",
    ],
    2
  )
);

console.log(solution(["x.x", ".x.", "x.x"], 3));
