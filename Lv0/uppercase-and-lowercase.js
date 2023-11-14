function solution(my_string) {
  return my_string
    .split("")
    .map((str) =>
      str >= "a" && str <= "z" ? str.toUpperCase() : str.toLowerCase()
    )
    .join("");
}
