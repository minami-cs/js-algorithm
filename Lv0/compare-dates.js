function solution(date1, date2) {
  // 첫째 풀이
  //     const [year1, month1, day1] = date1;
  //     const [year2, month2, day2] = date2;

  //     if (year1 < year2) return 1;
  //     if (year1 === year2) {
  //         if (month1 < month2) return 1;
  //         if (month1 === month2) {
  //             if (day1 < day2) return 1;
  //             return 0;
  //         }
  //         return 0;
  //     }
  //     return 0;
  // 둘째 풀이
  return Number(new Date(date1) < new Date(date2));
}
