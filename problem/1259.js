const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.forEach((num) => {
    if (num === '0') {
        return;
    }
    const arr = Array.from(num);
    let result = true;
    for (let i = 0; i < Math.trunc(arr.length / 2); i++) {
        if (arr[i] !== arr[arr.length - i - 1]) {
            result = false;
        }
    }
    console.log(result ? 'yes' : 'no');
});
