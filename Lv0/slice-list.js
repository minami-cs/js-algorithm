function solution(n, slicer, num_list) {
  switch (n) {
    case 1:
      return num_list.slice(0, slicer[1] + 1);
    case 2:
      return num_list.slice(slicer[0]);
    case 3:
      return num_list.slice(slicer[0], slicer[1] + 1);
    case 4:
      return num_list
        .slice(slicer[0], slicer[1] + 1)
        .filter((_, idx) => idx % slicer[2] === 0);
  }
}

console.log(solution(3, [1, 5, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(solution(4, [1, 5, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9]));
