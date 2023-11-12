function solution(my_string, m, c) {
  return my_string
    .split("")
    .filter((str, idx) => idx % m === c - 1)
    .join("");
}
