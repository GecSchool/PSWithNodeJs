const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input[0]);

const values = input.slice(1, n + 1);

values.forEach((value) => {
    const [n1, n2] = value.split(' ').map(Number);
    console.log(n1 + n2);
});
