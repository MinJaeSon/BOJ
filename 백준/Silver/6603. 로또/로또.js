const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
for (let i = 0; ; i++) {
  if (input[i] === "0") {
    break;
  }

  const [k, ...numbers] = input[i].split(" ").map(Number);
  const result = [];
  dfs(0, []);

  if (i > 0) console.log('');
  console.log(result.map((row) => row.join(' ')).join('\n'));

  function dfs(start, comb) {
    if (comb.length === 6) {
      result.push([...comb]);
      return;
    }

    for (let i = start; i < k; i++) {
      comb.push(numbers[i]);
      dfs(i + 1, comb);
      comb.pop();
    }
  }
}
