function solution(strArr) {
    let arr = []
    for(let i = 0; i < strArr.length; i++){
        arr.push(strArr[i].length)
    }
    let countMap = arr.reduce((a,c) => {
        a[c] = (a[c] || 0) + 1;
        return a
    }, {})
    return Math.max(...Object.values(countMap));
}