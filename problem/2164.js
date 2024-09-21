const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const num = parseInt(input);
let powerOfTwo = 1;

if (num === 1) {
    console.log(1);
} else {
    while (true) {
        if (powerOfTwo < num && num <= powerOfTwo * 2) break;
        powerOfTwo *= 2; // 2 ** n을 매번 새로 계산하지 않고 곱셈으로 처리
    }

    console.log((num - powerOfTwo) * 2);
}
