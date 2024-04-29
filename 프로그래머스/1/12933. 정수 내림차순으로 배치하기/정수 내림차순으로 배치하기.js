function solution(n) {
    var answer = 0;
    
    const str = String(n)
    const newArr = Array.from(str)
    
    const newArr2 = Number(newArr.sort((a,b) => a- b).reverse().join(''))
    
    
    return answer = newArr2;
}