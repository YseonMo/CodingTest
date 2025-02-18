function solution(intStrs, k, s, l) {
    let arr = [];
    let answer = []
    for(let i = 0; i < intStrs.length; i++){
        arr.push(intStrs[i].slice(s, s+l))
        if(Number(arr[i]) > k){
            answer.push(Number(arr[i]))
        }
    }
    return answer
}