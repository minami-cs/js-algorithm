function solution(myString) {
  return myString
    .split("x")
    .filter((str) => str.length)
    .sort();
}
