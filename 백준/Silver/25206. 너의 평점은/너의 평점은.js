let fs = require('fs')
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((x) => x.split(' '))

const table = {
  'A+': 4.5,
  A0: 4,
  'B+': 3.5,
  B0: 3,
  'C+': 2.5,
  C0: 2,
  'D+': 1.5,
  D0: 1,
  F: 0,
}

let score = 0
let total = 0

for (let [a, b, c] of input) {
  if (c === 'P') continue
  total += b * table[c]
  score += +b
}
console.log(total / score)
