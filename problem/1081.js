const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const values = input[1].split(' ');

const min = Math.min(...values);
const max = Math.max(...values);

console.log(min, max);
