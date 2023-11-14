function solution(my_string, n) {
  return my_string
    .split("")
    .reduce(
      (prev, curr) => prev.concat(Array.from({ length: n }, (_) => curr)),
      []
    )
    .join("");
}
