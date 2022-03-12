function solution(s) {
  const stringNumber = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < stringNumber.length; i++) {
    if (s.includes(stringNumber[i])) {
      let regex = new RegExp(stringNumber[i], "g");
      s = s.replace(regex, i);
    }
  }
  return Number(s);
}

const s1 = "one4seveneight";
const s2 = "23four5six7";
const s3 = "2three45sixseven";
const s4 = "1zerozero3";

console.log(solution(s1));
console.log(solution(s2));
console.log(solution(s3));
console.log(solution(s4));
