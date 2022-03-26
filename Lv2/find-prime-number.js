function solution(numbers) {
  const answer = [];
  // string을 배열로 만들기
  const numbersArr = Array.from(numbers);

  for (let i = 1; i < numbersArr.length + 1; i++) {
    getPermutations(numbersArr, i).forEach((number) => {
      if (isPrime(Number(number))) answer.push(Number(number));
    });
  }

  const result = new Set(answer);

  return result.size;
}
// 숫자 조합하기 - 순열, 조합
const getPermutations = (arr, selectedNumber) => {
  const result = [];
  // 1개씩 선택할 때는 바로 배열의 모든 원소 return하기
  if (selectedNumber === 1) return arr.map((val) => [val]);

  arr.forEach((fixed, index, origin) => {
    // fixed 제외 나머지 값
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    // rest로 순열 구하기
    const permutations = getPermutations(rest, selectedNumber - 1);
    // rest로 구한 순열에 fixed 붙이기
    const attached = permutations.map((permutation) =>
      [fixed, ...permutation].join("")
    );
    result.push(...attached);
  });

  return result;
};

// 소수 찾기 - 에라토스테네스의 체
const isPrime = (number) => {
  // 0, 1 처리
  if (number < 2) return false;
  // 2 처리
  if (number === 2) return true;
  for (let i = 2; i < Math.sqrt(number) + 1; i++) {
    if (number % i === 0) return false;
  }
  return true;
};

const numbers1 = "17";
const numbers2 = "011";

console.log(solution(numbers1));
console.log(solution(numbers2));
