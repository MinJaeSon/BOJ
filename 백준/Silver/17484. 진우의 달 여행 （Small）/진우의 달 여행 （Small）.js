const input = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map((v) => v.trim().split(' ').map(Number));

const [N, M] = input.shift();
const dp = Array.from(new Array(N), () => Array.from(new Array(M), () => new Array(3).fill(0)));
input[0].forEach((v, i) => {
	dp[0][i] = new Array(3).fill(v);
});

dp[0][0][0] = 0;
dp[0][M - 1][2] = 0;

for (let i = 1; i < N; i++) {
	dp[i][0][1] = input[i][0] + dp[i - 1][0][2];
	dp[i][0][2] = input[i][0] + Math.min(dp[i - 1][1][0], dp[i - 1][1][1]);

	for (let j = 1; j < M - 1; j++) {
		const value = input[i][j];
		dp[i][j][0] = value + Math.min(dp[i - 1][j - 1][1], dp[i - 1][j - 1][2]);
		dp[i][j][1] = value + Math.min(dp[i - 1][j][0], dp[i - 1][j][2]);
		dp[i][j][2] = value + Math.min(dp[i - 1][j + 1][0], dp[i - 1][j + 1][1]);
	}
	dp[i][M - 1][0] = input[i][M - 1] + Math.min(dp[i - 1][M - 2][1], dp[i - 1][M - 2][2]);
	dp[i][M - 1][1] = input[i][M - 1] + dp[i - 1][M - 1][0];
}
console.log(Math.min(...dp[N - 1].flat().slice(1, -1)));