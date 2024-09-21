const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const n = parseInt(input);

const dp = [0, 1, 2];

for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] +  dp[i - 2]) % 10007;
}
console.log(dp[n] % 10007);
