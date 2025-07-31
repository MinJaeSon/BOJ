const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let index = 0;
let num = 0;

for (let i = 0; i < 3; i++) {
  if (Number(input[i])) {
    index = i;
    num = Number(input[i]);
  }
}
num += (3 - index);

if (num % 3 === 0 && num % 5 === 0) {
  console.log("FizzBuzz");
} else if (num % 3 === 0) {
  console.log("Fizz");
} else if (num % 5 === 0) {
  console.log("Buzz");
} else {
  console.log(num);
}
