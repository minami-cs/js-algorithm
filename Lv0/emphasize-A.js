function solution(myString) {
  return myString
    .split("")
    .map((str) =>
      str === "a" || str === "A" ? str.toUpperCase() : str.toLowerCase()
    )
    .join("");
}
