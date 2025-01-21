let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = input[0].split(' ')
let arr = []
let sum = 0
for (let i = 0; i < n.length; i++) {
  arr.push(n[i] * n[i])
}
for (let j = 0; j < arr.length; j++) {
  sum += arr[j]
}
console.log(sum % 10)
