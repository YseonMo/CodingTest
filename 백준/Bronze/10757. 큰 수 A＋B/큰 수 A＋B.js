let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split(' ')

let A = BigInt(input[0])
let B = BigInt(input[1])
let answer = A + B
console.log(answer.toString())
