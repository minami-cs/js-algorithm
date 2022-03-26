// 최종적으로 리팩토링한 것
function solution(answers) {
  const student1 = [1, 2, 3, 4, 5];
  const student2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let counts = [0, 0, 0];
  let result = [];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === student1[i % student1.length]) counts[0] += 1;
    if (answers[i] === student2[i % student2.length]) counts[1] += 1;
    if (answers[i] === student3[i % student3.length]) counts[2] += 1;
  }

  const maxNum = Math.max(...counts);

  for (let i = 0; i < counts.length; i++) {
    if (counts[i] === maxNum) result.push(i + 1);
  }

  return result;
}

const answers1 = [1, 2, 3, 4, 5];
const answers2 = [1, 3, 2, 4, 2];

console.log(solution(answers1));
console.log(solution(answers2));

// 통과는 했지만 모든 케이스를 검사해야 해서 코드가 너무 길다.
// function solution(answers) {
//   const student1 = [1, 2, 3, 4, 5];
//   const student2 = [2, 1, 2, 3, 2, 4, 2, 5];
//   const student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
//   let result = [];

//   const count1 = countAnswers(answers, student1);
//   const count2 = countAnswers(answers, student2);
//   const count3 = countAnswers(answers, student3);

//   if (count1 > count2 && count1 > count3) result.push(1);
//   else if (count2 > count1 && count2 > count3) result.push(2);
//   else if (count3 > count1 && count3 > count2) result.push(3);
//   else if (count1 === count2 && count1 > count3) {
//     result.push(1);
//     result.push(2);
//   } else if (count1 === count3 && count1 > count2) {
//     result.push(1);
//     result.push(3);
//   } else if (count2 === count3 && count2 > count1) {
//     result.push(2);
//     result.push(3);
//   } else if (count1 === count2 && count2 === count3) {
//     result.push(1);
//     result.push(2);
//     result.push(3);
//   }

//   return result;
// }

// const countAnswers = (answers, student) => {
//   let count = 0;

//   for (let i = 0; i < answers.length; i++) {
//     if (answers[i] === student[i % student.length]) {
//       count++;
//     }
//   }
//   return count;
// };

// 위의 코드를 리팩토링해본 코드
// function solution(answers) {
//   const student1 = [1, 2, 3, 4, 5];
//   const student2 = [2, 1, 2, 3, 2, 4, 2, 5];
//   const student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
//   let counts = [];
//   let result = [];

//   counts[0] = countAnswers(answers, student1);
//   counts[1] = countAnswers(answers, student2);
//   counts[2] = countAnswers(answers, student3);

//   const maxNum = Math.max(...counts);

//   for (let i = 0; i < counts.length; i++) {
//     if (counts[i] === maxNum) result.push(i + 1);
//   }

//   return result;
// }

// const countAnswers = (answers, student) => {
//   let count = 0;

//   for (let i = 0; i < answers.length; i++) {
//     if (answers[i] === student[i % student.length]) {
//       count++;
//     }
//   }
//   return count;
// };
