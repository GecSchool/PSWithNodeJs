const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const n = parseInt(input);

for (let i = 1; i <= n; i++) {
    console.log(i);
}
