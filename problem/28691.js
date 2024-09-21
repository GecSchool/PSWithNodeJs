const fs = require('fs');
const input = fs.readFileSync('../Input/input.txt').toString().trim();

const names = ['MatKor', 'WiCys', 'CyKor', 'AlKor', '$clear'];

names.forEach((name) => {
    if (name[0] === input) console.log(name);
});
