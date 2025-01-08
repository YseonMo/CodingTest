let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let a = Number(input[0])
let b = Number(input[1])
let c = Number(input[2])

let num = String(a * b * c)
for (let i = 0; i <= 9; i++) {
  let count = 0

  for (let j = 0; j < num.length; j++) {
    if (Number(num[j]) === i) {
      count++
    }
  }
  console.log(count)
}
