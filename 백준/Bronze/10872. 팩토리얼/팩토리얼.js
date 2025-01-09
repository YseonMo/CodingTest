let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0])
let answer = 1
for (let i = n; i >= 1; i--) {
  answer *= i
}

console.log(answer)
