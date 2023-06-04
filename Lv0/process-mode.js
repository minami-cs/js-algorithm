function solution(code) {
  let ret = "";
  let mode = 0;

  for (let i = 0; i < code.length; i++) {
    if (Number(code[i]) === 1) {
      mode === 0 ? (mode = 1) : (mode = 0);
    } else {
      if (i % 2 === mode) {
        ret += code[i];
      }
    }
  }

  return ret.length > 0 ? ret : "EMPTY";
}
