const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(BigInt);

const [n, m] = input;

console.log(`${n / m}\n${n % m}`);

// Math.trunc -> 소수점 제거 후 정수 만,
