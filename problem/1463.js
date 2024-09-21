const fs = require('fs');
const input = fs.readFileSync('../Input/input.txt').toString().trim();

const dp = [0, 0, 1, 1, 2];
const n = parseInt(input);

function getValue(n) {
    let minValue = dp[n - 1];
    if (!(n % 2)) {
        minValue = Math.min(minValue, dp[n / 2]);
    }
    if (!(n % 3)) {
        minValue = Math.min(minValue, dp[n / 3]);
    }
    return minValue + 1;
}

for (let i = 5; i <= n; i++) {
    dp[i] = getValue(i);
}
console.log(dp[n]);
