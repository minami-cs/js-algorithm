function solution(myString, pat) {
  return Number(
    myString
      .split("")
      .map((str) => (str === "A" ? "B" : "A"))
      .join("")
      .includes(pat)
  );
}
