function solution(my_string, queries) {
  queries.forEach((query) => {
    let answer = [...my_string];
    console.log(answer);
    const phrase = answer.slice(query[0], query[1] + 1);
    const reversedPhrase = phrase.reverse().join("");

    answer.splice(query[0], query[1] - query[0] + 1, reversedPhrase);
    my_string = answer.join("");
    console.log(my_string);
  });

  return my_string;
}

solution("rermgorpsam", [
  [2, 3],
  [0, 7],
  [5, 9],
  [6, 10],
]);
