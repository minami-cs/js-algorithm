function solution(cipher, code) {
  return cipher
    .split("")
    .filter((str, idx) => (idx + 1) % code === 0)
    .join("");
}
