function solution(a, b, c, d) {
  const diceNumbers = [a, b, c, d].sort((a, b) => a - b);

  if (diceNumbers[0] === diceNumbers[3]) {
    return 1111 * a;
  } else if (
    diceNumbers[0] === diceNumbers[2] ||
    diceNumbers[1] === diceNumbers[3]
  ) {
    return Math.pow(
      10 * diceNumbers[1] + diceNumbers[3] + diceNumbers[0] - diceNumbers[1],
      2
    );
  } else if (
    diceNumbers[0] === diceNumbers[1] &&
    diceNumbers[2] === diceNumbers[3]
  ) {
    return (
      (diceNumbers[0] + diceNumbers[2]) * (diceNumbers[2] - diceNumbers[0])
    );
  } else if (diceNumbers[0] === diceNumbers[1]) {
    return diceNumbers[2] * diceNumbers[3];
  } else if (diceNumbers[1] === diceNumbers[2]) {
    return diceNumbers[0] * diceNumbers[3];
  } else if (diceNumbers[2] === diceNumbers[3]) {
    return diceNumbers[0] * diceNumbers[1];
  } else {
    return diceNumbers[0];
  }
}

solution(2, 2, 2, 2);
solution(4, 1, 4, 4);
solution(6, 3, 3, 6);
solution(2, 5, 2, 6);
solution(6, 4, 2, 5);
