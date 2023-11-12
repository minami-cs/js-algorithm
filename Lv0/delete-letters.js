function solution(my_string, indices) {
  return my_string
    .split("")
    .filter((str, idx) => !indices.includes(idx))
    .join("");
}
