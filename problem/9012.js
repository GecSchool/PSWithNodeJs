const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);

const strings = input.slice(1, n + 1);

function isVPS(string) {
    const stack = [];
    for (const char of string) {
        if (char === '(') {
            stack.push(char);
        } else {
            if (stack.at(-1) === '(') stack.pop();
            else stack.push(char);
        }
    }
    return !!!stack.length;
}

strings.forEach((string) => {
    console.log(isVPS(string) ? 'YES' : 'NO');
});
