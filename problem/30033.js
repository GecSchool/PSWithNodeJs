const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = input[0];
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);
let result = 0;

for (let i = 0; i < n; i++) if (B[i] >= A[i]) result += 1;

console.log(result);
