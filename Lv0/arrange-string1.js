function solution(my_string) {
  return my_string
    .split("")
    .filter((str) => !Number.isNaN(Number(str)))
    .map((str) => Number(str))
    .sort((a, b) => a - b);
}
