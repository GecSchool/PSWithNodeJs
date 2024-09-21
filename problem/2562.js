const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let maxValue = 0;
let targetIndex = 0;

input.forEach((value, index) => {
    if (maxValue < value) {
        maxValue = value;
        targetIndex = index + 1;
    }
});

console.log(maxValue);
console.log(targetIndex);
