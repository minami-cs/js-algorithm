function solution(my_string) {
  const regex = /[^0-9]/g;
  const numberArray = my_string.replace(regex, " ").split(" ");

  return numberArray.reduce((prev, curr) => prev + Number(curr), 0);
}

console.log(solution("aAb1B2cC34oOp"));
console.log(solution("1a2b3c4d123Z"));
