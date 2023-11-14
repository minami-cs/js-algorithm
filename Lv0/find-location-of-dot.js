function solution(dot) {
  //     if (dot[0] > 0) {
  //         return dot[1] > 0 ? 1 : 4;
  //     }

  //     if (dot[0] < 0) {
  //         return dot[1] > 0 ? 2 : 3;
  //     }

  return dot[0] > 0 ? (dot[1] > 0 ? 1 : 4) : dot[1] > 0 ? 2 : 3;
}
