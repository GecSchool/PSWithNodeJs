const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [k, n] = input[0].split(' ').map(Number);
const lengths = input.slice(1, k + 1).map(Number);

const maxLenght = Math.max(...lengths);

function getLinesNumber(length) {
    let numberOfLines = 0;
    lengths.forEach((lineLength) => {
        numberOfLines += Math.trunc(lineLength / length);
    });
    return numberOfLines;
}

function searchLenght(left, right) {
    if (left > right) return right;

    const length = Math.trunc((left + right) / 2);
    const numberOfLines = getLinesNumber(length);
    if (numberOfLines >= n) {
        //more longer
        return searchLenght(length + 1, right);
    } else {
        //more shorter
        return searchLenght(left, length - 1);
    }
}

console.log(searchLenght(0, maxLenght));
