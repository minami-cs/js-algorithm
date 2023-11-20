function solution(s) {
  let p = 0;
  let y = 0;
  s.toLowerCase()
    .split("")
    .map((str) => {
      if (str === "p") {
        p += 1;
      }
      if (str === "y") {
        y += 1;
      }
    });
  return p === y;
}
