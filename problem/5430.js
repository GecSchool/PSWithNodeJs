const fs = require('fs');
const input = fs.readFileSync('../Input/input.txt').toString().trim().split('\n');

const n = parseInt(input[0]);

for (let i = 0; i < n; i++) {
    const cmds = Array.from(input[i * 3 + 1]);
    const size = parseInt(input[i * 3 + 2]);
    const arr = JSON.parse(input[i * 3 + 3]);
    let dir = true; // true => right direction
    let leftIndex = 0;
    let rightIndex = size;
    cmds.forEach((cmd) => {
        if (cmd === 'R') {
            dir = !dir;
        } else if (cmd === 'D') {
            if (dir) {
                leftIndex++;
            } else {
                rightIndex--;
            }
        }
    });
    let result = '';
    if (leftIndex > rightIndex && size) {
        result = 'error';
    } else if (!size && rightIndex !== leftIndex) {
        result = 'error';
    } else {
        const tmp = arr.slice(leftIndex, rightIndex);
        result += '[';
        result += dir ? tmp.join(',') : tmp.reverse().join(',');
        result += ']';
    }

    console.log(result);
}
