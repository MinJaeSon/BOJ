const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const arr = input.slice(1);
let result = [];
let n = Number(arr[0]);

for (let i = 0; i < arr.length; i += n) {
  n = Number(arr[i]);
  const clothes = arr.slice(i + 1, i + n + 1);
  let map = {};
  let num = 1;

  for (let j = 0; j < n; j++) {
    const [name, type] = clothes[j].split(' ');
    if (!map[type]) {
      map[type] = []
    }
    map[type].push(name);
  }

  for (let type of Object.keys(map)) {
    num *= (map[type].length + 1);
  }

  result.push(num - 1);

  n += 1
}

console.log(result.join('\n'));