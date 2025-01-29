let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()

let croatia = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']
for (let x of croatia) {
  input = input.replaceAll(x, '@')
}

console.log(input.length)
