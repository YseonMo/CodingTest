function solution(n) {
    var answer = [];
    const str = String(n)
    const mapfn = (arg) => Number(arg)
    const newArr = str.split('').map(mapfn).reverse()
    answer = newArr
    
    return answer;
}