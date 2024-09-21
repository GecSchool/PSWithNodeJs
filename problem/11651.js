const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);

const values = [];

for (let i = 0; i < n; i++) {
    values[i] = input[i + 1].split(' ').map(Number);
}

values.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
});

values.forEach((value) => {
    console.log(value[0], value[1]);
});
