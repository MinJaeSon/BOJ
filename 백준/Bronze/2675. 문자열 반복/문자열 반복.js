const fs = require("fs");
const [_, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

input.forEach((tc) => {
  const num = Number(tc.split(' ')[0]);
  const string = tc.split(' ')[1];
  let result = [];
  [...string].forEach((char) => {
    result.push(char.repeat(num));
  })
  console.log(result.join(''));
})