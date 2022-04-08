function solution(record) {
  const temp = [];
  const result = [];
  const users = {};
  const message = {
    Enter: "님이 들어왔습니다.",
    Leave: "님이 나갔습니다.",
  };

  for (let i = 0; i < record.length; i++) {
    let [cmd, uid, name] = record[i].split(" ");
    if (cmd === "Enter" || cmd === "Change") {
      users[uid] = name;
    }
    if (cmd === "Enter" || cmd === "Leave") {
      temp.push([uid, cmd]);
    }
  }

  for (let i = 0; i < temp.length; i++) {
    let [uid, cmd] = temp[i];
    result.push(users[uid].concat(message[cmd]));
  }
  return result;
}

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
);
// {uid: nickname, uid: nickname, ...} 형태로 닉네임 바꿔주기
