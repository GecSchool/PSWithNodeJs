const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);

const colors = Array.from(Array(3), () => new Array());
const dp = Array.from(Array(3), () => new Array());

for (let i = 0; i < n; i++) {
    const [r, g, b] = input[i + 1].split(' ').map(Number);
    colors[0][i] = r;
    colors[1][i] = g;
    colors[2][i] = b;
}

dp[0][0] = colors[0][0];
dp[1][0] = colors[1][0];
dp[2][0] = colors[2][0];

for (let i = 1; i < n; i++) {
    for (let j = 0; j < 3; j++) {
        dp[j][i] = Math.min(dp[(j + 1) % 3][i - 1], dp[(j + 2) % 3][i - 1]) + colors[j][i];
    }
}
console.log(Math.min(Math.min(dp[0][n - 1], dp[1][n - 1]), Math.min(dp[2][n - 1])));
