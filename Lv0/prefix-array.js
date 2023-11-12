function solution(my_string) {
  const strings = [];

  for (let i = 0; i < my_string.length; i++) {
    strings.push(my_string.substring(i));
  }

  strings.forEach((string) => string.charCodeAt());

  console.log(strings);
}

solution("banana");
