const fs = require('fs');
const [a, b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
function fun(n, dimen) {
    if (a === n) {
        return dimen + 1;
    }
    if (a > n) {
        return -1;
    }
    if (!(n % 2)) {
        return fun(n / 2, dimen + 1);
    } else if (n % 10 === 1) {
        return fun(Math.floor(n / 10), dimen + 1);
    } else if (!(n % 10 === 1) && n % 2) return -1;
}

console.log(fun(b, 0));
