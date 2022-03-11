function solution(new_id) {
  const regex = /[^\w\d\-_.]/g;
  const repeat_dot_regex = /\.+/g;
  const dot_regex = /^\.|\.$/g;
  const null_regex = /^$/;
  const regex_id = new_id
    .toLowerCase()
    .replace(regex, "")
    .replace(repeat_dot_regex, ".")
    .replace(dot_regex, "")
    .substring(0, 15)
    .replace(null_regex, "a")
    .replace(dot_regex, "");

  if (regex_id.length > 2) {
    return regex_id;
  } else {
    return regex_id + regex_id[regex_id.length - 1].repeat(3 - regex_id.length);
  }
}

const new_id1 = "...!@BaT#*..y.abcdefghijklm";
const new_id2 = "z-+.^.";
const new_id3 = "=.=";
const new_id4 = "123_.def";
const new_id5 = "abcdefghijklmn.p";

console.log(solution(new_id4));
