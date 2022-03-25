function solution(bridge_length, weight, truck_weights) {
  // 길이가 bridge_length가 최대인 배열에 순서대로 넣되 요소의 총합이 다리 길이를 넘어서는 안됨
  let bridge = Array.from({ length: bridge_length }, () => 0); // 배열 생성 및 초기화 같이 할 때는 Array.from() 사용
  let result = 0;

  // 다리를 건너는 트럭이 있는 동안
  while (bridge.length) {
    // queue가 하나씩 이동하도록
    bridge.shift();
    result++;

    // 트럭이 아직 남아있을 때
    if (truck_weights.length > 0) {
      let sumTruck = bridge.reduce((prev, curr) => prev + curr, 0);
      // 트럭을 넣을 수 있을 때
      if (sumTruck + truck_weights[0] <= weight) {
        let truck = truck_weights.shift();
        bridge.push(truck);
      } else {
        bridge.push(0);
      }
    }
  }
  return result;
}

const bridge_length1 = 2;
const weight1 = 10;
const truck_weights1 = [7, 4, 5, 6];

const bridge_length2 = 100;
const weight2 = 100;
const truck_weights2 = [10];

const bridge_length3 = 100;
const weight3 = 100;
const truck_weights3 = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

console.log(solution(bridge_length1, weight1, truck_weights1));
// console.log(solution(bridge_length2, weight2, truck_weights2));
// console.log(solution(bridge_length3, weight3, truck_weights3));
