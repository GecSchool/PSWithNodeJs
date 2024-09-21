const fs = require('fs');
const [n, k] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let result = '';

const queue = [];

for (let i = 1; i <= n; i++) queue.push(i);

while (queue.length > 0) {
    for (let i = 1; i < k; i++) {
        queue.push(queue.shift());
    }
    result += ` ${queue.shift()},`;
}

console.log(`<${result.trim().slice(0, -1)}>`);
