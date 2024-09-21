const fs = require('fs');
const input = fs.readFileSync('../Input/input.txt').toString().trim();

const n = parseInt(input);

console.log(!(n % 4) && (n % 100 || !(n % 400)) ? 1 : 0);
