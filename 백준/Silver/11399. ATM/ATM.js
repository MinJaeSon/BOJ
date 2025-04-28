const filePath = process.platform == 'linux' ? '/dev/stdin' : './input.txt';
const [N, input] = require('fs').readFileSync(filePath).toString().trim().split('\n');
const times = input.split(' ').map(Number).sort((a, b) => a - b);
let sum = 0;
let result = 0;
for (let i = 0; i < N; i++) {
  sum += times[i];
  result += sum;
}
console.log(result);