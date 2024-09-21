const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);

const values = input.slice(1, n + 1);

values.forEach((value) => {
    const [num, str] = value.split(' ');
    let result = '';
    Array.from(str).forEach((char) => {
        result += char.repeat(parseInt(num));
    });
    console.log(result);
});
