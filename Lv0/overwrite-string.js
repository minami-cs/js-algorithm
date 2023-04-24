function solution(my_string, overwrite_string, s) {
  const firstString = my_string.slice(0, s);
  const lastString = my_string.slice(s + overwrite_string.length);

  return firstString + overwrite_string + lastString;
}

// 6번 케이스처럼 반복되는 문자열이 있을 때를 조심하기
