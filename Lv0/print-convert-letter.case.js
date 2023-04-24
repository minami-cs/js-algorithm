const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  str = input[0];

  let stringArray = [];

  for (i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      stringArray.push(str[i].toLowerCase());
    } else {
      stringArray.push(str[i].toUpperCase());
    }
  }

  console.log(stringArray.join(""));
});
