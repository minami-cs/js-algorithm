function solution(my_string) {
  const regex = /[aeiou]/gi;

  return my_string.replace(regex, "");
}
