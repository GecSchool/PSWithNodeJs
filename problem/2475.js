const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const sum = inputs.reduce((accumulator, currentValue) => accumulator + currentValue ** 2, 0);

console.log(sum % 10);
