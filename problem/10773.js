const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const n = input[0];
const values = input.slice(1, n + 1);

const stack = [];

values.forEach((value) => {
    if (value !== 0) {
        // push
        stack.push(value);
    } else {
        // pop
        stack.pop();
    }
});
const sum = stack.reduce((pre, cur) => {
    return pre + cur;
}, 0);

console.log(sum);
