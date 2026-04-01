const { count } = require("console");
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const n = Number(input[0]);
const records = input.slice(1).map((record) => record.split(" "));
let [count1, count2] = [0, 0]; // 각 팀의 득점
let [total1, total2] = [0, 0]; // 각 팀이 이기고 있던 누적 시간 (초 단위)
let winTeam = null; // 현재 이기고 있는 팀
let winTime = null; // 현재 이기고 있는 팀이 처음에 이기기 시작한 시간

for (const [team, time] of records) {
  if (team === "1") {
    count1++;
  } else {
    count2++;
  }

  if (count1 - count2 === 1 && (winTeam === "2" || winTeam === null)) {    // 이기고 있는 팀이 1로 바뀐 경우
    winTeam = "1";
    winTime = time;
    continue;
  }
  if (count2 - count1 === 1 && (winTeam === "1" || winTeam === null)) {   // 이기고 있는 팀이 2로 바뀐 경우
    winTeam = "2";
    winTime = time;
    continue;
  }

  // 동점이 된 경우
  if (count1 === count2 && winTeam) {
    const winningTime = convertFormatTimeToSecond(time) - convertFormatTimeToSecond(winTime);

    if (winTeam === "1") {
      total1 += winningTime;
    } else {
      total2 += winningTime;
    }

    winTeam = null;
    winTime = null;
  }
}

if (winTeam) {   // 경기 끝났는데 이기고 있던 팀이 있으면 마저 계산
  const winningTime = 48 * 60 - convertFormatTimeToSecond(winTime);

  if (winTeam === "1") {
    total1 += winningTime;
  } else {
    total2 += winningTime;
  }
}

console.log(convertSecondToFormatTime(total1));
console.log(convertSecondToFormatTime(total2));

function convertFormatTimeToSecond(time) {   // 문자열 형식의 시간을 초 단위로 반환
  const [mm, ss] = time.split(":").map(Number);

  return mm * 60 + ss;
}

function convertSecondToFormatTime(second) {   // 초 단위 시간을 문자열 형식의 시간으로 반환
  const mm = String(Math.floor(second / 60)).padStart(2, '0');
  const ss = String(second % 60).padStart(2, '0');

  return mm + ":" + ss;
} 
