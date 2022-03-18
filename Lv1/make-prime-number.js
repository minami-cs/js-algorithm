function solution(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (isPrime(nums[i] + nums[j] + nums[k])) {
          count += 1;
        }
      }
    }
  }
  return count;
}

const isPrime = (num) => {
  for (let i = 2; i < Math.sqrt(num) + 1; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const nums1 = [1, 2, 3, 4];
const nums2 = [1, 2, 7, 6, 4];

console.log(solution(nums1));
console.log(solution(nums2));

// 채*톡 코테에 나와서 똑같이 풀어낸 문제
