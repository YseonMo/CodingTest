const fs = require('fs')

const input = require('fs').readFileSync('/dev/stdin').toString().trim()
//require('fs').readFileSync('dev/stdin')

let result = Number(input)
let count = 0

while (true) {
  // 10의 자리수 + 1의 자리수
  let sum = Math.floor(result / 10) + (result % 10)
  // result의 10의자리 + add의 1의 자리
  result = (result % 10) * 10 + (sum % 10)
  count++
  // input값이랑 result가 같으면 탈출
  if (Number(input) === result) {
    break
  }
}

console.log(count)
