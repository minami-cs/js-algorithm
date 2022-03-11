function solution(lottos, win_nums) {
  const rank = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
    1: 6,
    0: 6,
  };
  lottos.sort((a, b) => {
    return a - b;
  });
  win_nums.sort((a, b) => {
    return a - b;
  });
  let same_count = 0;
  let zero_count = 0;
  for (let i = 0; i < lottos.length; i++) {
    for (let j = 0; j < win_nums.length; j++) {
      if (lottos[i] === 0) {
        zero_count += 1;
        break;
      }
      if (lottos[i] === win_nums[j]) {
        same_count += 1;
      }
    }
  }

  let best_rank = 0;
  let worst_rank = 0;
  if (0 < zero_count && zero_count < 6) {
    best_rank = rank[zero_count + same_count];
    worst_rank = rank[same_count];
  }
  if (zero_count === 0) {
    best_rank = rank[same_count];
    worst_rank = rank[same_count];
  }
  if (zero_count === 6) {
    best_rank = 1;
    worst_rank = 6;
  }
  return [best_rank, worst_rank];
}

const lottos1 = [44, 1, 0, 0, 31, 25];
const win_nums1 = [31, 10, 45, 1, 6, 19];
const result1 = [3, 5];
console.log(solution(lottos1, win_nums1));

// const lottos2 = [0, 0, 0, 0, 0, 0];
// const win_nums2 = [38, 19, 20, 40, 15, 25];
// const result2 = [1, 6];
// console.log(solution(lottos2, win_nums2));

// const lottos3 = [45, 4, 35, 20, 3, 9];
// const win_nums3 = [20, 9, 3, 45, 4, 35];
// const result3 = [1, 1];
// console.log(solution(lottos3, win_nums3));
