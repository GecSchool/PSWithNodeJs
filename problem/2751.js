const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const arr = input.slice(1, input[0] + 1);

const result = [];
let str = '';
arr.forEach((num) => (result[num + 1000000] = num));
for (let i = 0; i <= 2000000; i++) {
    if (result[i] !== undefined) {
        str += `${result[i]}\n`;
    }
}
str = str.slice(0, -1);
console.log(str);

// -1,000,000 ~ 0 -> 0 ~ 1,000,000
// 1 ~ 1,000,000 -> 1,000,001 ~ 2,000,000
//
