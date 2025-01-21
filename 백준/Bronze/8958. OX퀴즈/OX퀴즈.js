let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0])

for (let i = 1; i <= n; i++) {
  let cur = 0
  let score = 0

  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === 'O') {
      cur++
    } else if (input[i][j] === 'X') {
      cur = 0
    }
    score += cur
  }
  console.log(score)
}
