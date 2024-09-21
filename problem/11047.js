const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, k] = input[0].split(' ').map(Number);
const coins = input.slice(1, n + 1).map(Number);
let result = 0;

for (let i = 1; i <= n; i++) {
    result += Math.trunc(k / coins[n - i]);
    k %= coins[n - i];
}
console.log(result);
