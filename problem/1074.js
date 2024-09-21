const fs = require('fs');
const [n, yPositopn, xPosition] = fs.readFileSync('../Input/input.txt').toString().trim().split(' ').map(Number);

function getQuadrant(n, xPosition, yPosition) {
    const halfLine = 2 ** (n - 1);
    return [Math.trunc(xPosition / halfLine), Math.trunc(yPosition / halfLine)];
}

function getZValue(n, xPosition, yPosition) {
    if (n == 1) return xPosition + 2 * yPosition;

    const halfLine = 2 ** (n - 1);

    const [xIndex, yIndex] = getQuadrant(n, xPosition, yPosition);

    return (
        getZValue(n - 1, xPosition - xIndex * halfLine, yPosition - yIndex * halfLine) +
        halfLine ** 2 * (xIndex + 2 * yIndex)
    );
}

console.log(getZValue(n, xPosition, yPositopn));
