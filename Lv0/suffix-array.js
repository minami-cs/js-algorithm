function solution(my_string) {
  const answer = [];

  for (let i = 0; i < my_string.length; i++) {
    const slicedString = my_string.slice(i, my_string.length);

    answer.push(slicedString);
  }
  return answer.sort();
}

solution("banana");
