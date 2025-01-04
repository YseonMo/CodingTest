let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0])

for (let i = 1; i <= n; i++) {
  let blank = ' '.repeat(n - i)
  let star = '*'.repeat(i + i - 1)
  console.log(blank + star)
}

for (let j = n - 1; j > 0; j--) {
  let blank = ' '.repeat(n - j)
  let star = '*'.repeat(j + j - 1)
  console.log(blank + star)
}
