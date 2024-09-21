const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const value = (input[0] * input[1] * input[2]).toString().split('').map(Number);
const result = new Array(10).fill(0);

value.forEach((val) => {
    result[val]++;
});
result.forEach((val) => {
    console.log(val);
});
