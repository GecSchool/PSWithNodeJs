const fs = require("fs");
const input = fs
  .readFileSync("../Input/input.txt")
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input[0]);
const values = input[1].split(" ").map(Number);
const minus = [];
const plus = [];

values.forEach((value) => {
  if (value >= 0) plus.push(value);
  else minus.push(value);
});

const result = [];

function biSearch(left, right) {
  if (left > right) {
    return;
  }
}
