let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let word = input[0]
let word2 = word.split('').reverse().join('')

if (word === word2) {
  console.log(1)
} else {
  console.log(0)
}
