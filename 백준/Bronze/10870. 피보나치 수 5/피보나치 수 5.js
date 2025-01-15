let input = parseInt(require('fs').readFileSync('/dev/stdin', 'utf8').trim())

function fibonacci(num, memo = {}) {
  if (num in memo) {
    return memo[num]
  }
  if (num === 0) {
    return 0
  } else if (num === 1) {
    return 1
  } else {
    memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo)
    return memo[num]
  }
}

let result = fibonacci(input)
console.log(result)
