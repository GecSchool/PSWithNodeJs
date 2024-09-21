const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);

const values = input.slice(1, 1 + n);

values.forEach((value) => console.log(`${value[0]}${value[value.length - 1]}`));
