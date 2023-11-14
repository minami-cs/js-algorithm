function solution(myString) {
  return myString
    .split("")
    .map((str) => (str.charCodeAt() < "l".charCodeAt() ? "l" : str))
    .join("");
}
