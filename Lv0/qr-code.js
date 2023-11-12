function solution(q, r, code) {
  return code
    .split("")
    .filter((str, idx) => idx % q === r)
    .join("");
}
