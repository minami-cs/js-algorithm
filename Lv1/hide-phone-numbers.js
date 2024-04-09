function solution(phone_number) {
  const lastDigits = phone_number.slice(-4);
  const hiddenDigits = "*".repeat(phone_number.length - 4);

  return hiddenDigits.concat(lastDigits);
}

console.log(solution("01033334444"));
console.log(solution("027778888"));
