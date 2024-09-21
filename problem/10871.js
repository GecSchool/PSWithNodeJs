const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, x] = input[0].split(' ').map(Number);
const values = input[1].split(' ').map(Number);
let result = '';
values.forEach((value) => {
    result += value < x ? ` ${value}` : '';
});

console.log(result.trimStart());
