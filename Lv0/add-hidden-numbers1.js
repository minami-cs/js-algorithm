function solution(my_string) {
  return my_string
    .split("")
    .filter((str) => !Number.isNaN(Number(str)))
    .reduce((prev, curr) => Number(prev) + Number(curr), 0);
}
