const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
let bulbs = input[1].split(' ').map((bulb) => !!Number(bulb));
const commands = input.slice(2);

commands.forEach((command) => {
  const [a, b, c] = command.split(' ').map(Number);
  switch (a) {
    case 1:
      bulbs[b - 1] = !!c;
      break;
    case 2:
      bulbs = bulbs.map((bulb, i) => i >= b - 1 && i < c ? !bulb : bulb);
      break;
    case 3:
      bulbs = bulbs.map((bulb, i) => i >= b - 1 && i < c ? false : bulb);
      break;
    case 4:
      bulbs = bulbs.map((bulb, i) => i >= b - 1 && i < c ? true : bulb);
      break;
  }
})

console.log(bulbs.map((bulb) => bulb ? 1 : 0).join(' '));