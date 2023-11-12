function solution(arr) {
  return arr.reduce(
    (prev, curr) => prev.concat(Array.from({ length: curr }, (_) => curr)),
    []
  );
}
