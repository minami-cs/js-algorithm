function solution(arr1, arr2) {
  const sumArr1 = arr1.reduce((prev, curr) => prev + curr, 0);
  const sumArr2 = arr2.reduce((prev, curr) => prev + curr, 0);

  if (arr1.length === arr2.length) {
    return sumArr1 > sumArr2 ? 1 : sumArr1 === sumArr2 ? 0 : -1;
  }
  return arr1.length > arr2.length ? 1 : -1;
}
