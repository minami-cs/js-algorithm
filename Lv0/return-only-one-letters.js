function solution(s) {
  const sArray = s.split("");

  return sArray
    .filter((letter) => sArray.lastIndexOf(letter) === sArray.indexOf(letter))
    .sort()
    .join("");
}
