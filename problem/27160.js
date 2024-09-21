const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const values = input.slice(1, n + 1);
const map = new Map();

values.forEach((value) => {
    const [fru, num] = value.split(' ');
    map.has(fru) ? map.set(fru, map.get(fru) + parseInt(num)) : map.set(fru, parseInt(num));
});

function hasValue(map, value) {
    for (const val of map.values()) {
        if (val === value) {
            return true; // 값이 존재하면 true 반환
        }
    }
    return false; // 값이 없으면 false 반환
}

console.log(hasValue(map, 5) ? 'YES' : 'NO');
