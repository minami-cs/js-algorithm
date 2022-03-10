function solution(id_list, report, k) {
  let ids = {};
  for (let i = 0; i < id_list.length; i++) {
    ids[id_list[i]] = [];
  }
  for (let i = 0; i < report.length; i++) {
    if (
      ids[report[i].split(" ")[0]].includes(report[i].split(" ")[1]) === false
    ) {
      ids[report[i].split(" ")[0]].push(report[i].split(" ")[1]);
    }
  }

  let reportNum = {};
  for (let i = 0; i < id_list.length; i++) {
    if (ids[id_list[i]].length > 0) {
      ids[id_list[i]].map((id) => {
        if (!reportNum[id]) {
          reportNum[id] = 1;
        } else {
          reportNum[id] += 1;
        }
      });
    }
  }

  const reportedIds = Object.keys(reportNum).filter((id) => reportNum[id] >= k);
  let result = [];
  for (let i = 0; i < id_list.length; i++) {
    let count = 0;
    if (ids[id_list[i]].length > 0) {
      ids[id_list[i]].map((id) => {
        if (reportedIds.includes(id) === true) {
          count += 1;
        }
      });
      result.push(count);
    } else {
      result.push(count);
    }
  }
  return result;
}
const id_list1 = ["muzi", "frodo", "apeach", "neo"];
const report1 = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];
const k1 = 2;
// console.log(solution(id_list1, report1, k1));

const id_list2 = ["con", "ryan"];
const report2 = ["ryan con", "ryan con", "ryan con", "ryan con"];
const k2 = 3;

console.log(solution(id_list2, report2, k2));
