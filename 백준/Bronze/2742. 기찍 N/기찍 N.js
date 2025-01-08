let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0])

for (let i = n; i >= 1; i--) {
  console.log(i)
}
