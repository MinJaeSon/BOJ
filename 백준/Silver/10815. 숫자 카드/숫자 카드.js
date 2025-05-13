const fs = require("fs");
let [N, SG, M, cards] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
SG = SG.split(' ').map(Number).sort((a, b) => a - b);
cards = cards.split(' ').map(Number);

console.log(cards.map((card) => binarySearch(SG, card) ? 1 : 0).join(' '));

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return true;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return false;
}