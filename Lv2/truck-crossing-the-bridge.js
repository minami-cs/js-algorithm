function solution(bridge_length, weight, truck_weights) {
  let result = 0;
  while (true) {
    // 길이 2인 배열에 순서대로 넣되 요소의 총합이 다리 길이를 넘어서는 안됨.
    let temp = [];
    let truck = truck_weights.shift();
    if (truck <= weight) {
      temp.push(truck);
    }
  }
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
console.log(solution(bridge_length2, weight2, truck_weights2));
console.log(solution(bridge_length3, weight3, truck_weights3));
