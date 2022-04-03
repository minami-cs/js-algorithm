function solution(routes) {
  // 카메라 기본적으로 한 대 설치
  let result = 1;

  // 정렬 먼저 하기 - 진입이 빠른순(오름차순)
  routes.sort((a, b) => a[0] - b[0]);

  // 진출 시점 초기화
  let exit = routes[0][1];

  for (let i = 1; i < routes.length; i++) {
    // 현재 차량 진출보다 다음 차량 진입이 느린 경우
    if (exit < routes[i][0]) {
      exit = routes[i][1];
      result++;
    }

    // 다음 차량 진입이 현재 차량 진출 이전일 경우
    if (exit > routes[i][1]) {
      exit = routes[i][1];
    }
  }
  return result;
}

console.log(
  solution([
    [-20, -15],
    [-14, -5],
    [-18, -13],
    [-5, -3],
  ])
);
