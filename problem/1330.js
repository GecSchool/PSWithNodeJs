const fs = require('fs');
const input = fs.readFileSync('../Input/input.txt').toString().trim().split(' ').map(Number);

console.log(input[0] < input[1] ? '<' : input[0] > input[1] ? '>' : '==');
