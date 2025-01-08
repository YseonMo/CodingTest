let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split(' ')

let a = Number(input[0])
let b = Number(input[1])
let c = Number(input[2])

let arr = []
arr.push(a, b, c)
arr.sort((a, b) => a - b)
console.log(arr[1])