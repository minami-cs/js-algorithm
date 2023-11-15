function solution(age) {
  return String(age)
    .split("")
    .map((num) => String.fromCharCode("a".charCodeAt() + Number(num)))
    .join("");
}
