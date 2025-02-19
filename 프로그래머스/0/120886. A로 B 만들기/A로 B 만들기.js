function solution(before, after) {
    let answer =''
    let newBefore = before.split('').sort()
    let newAfter = after.split('').sort()
    
    if(JSON.stringify(newBefore) === JSON.stringify(newAfter)){
        answer = 1
    } else {
        answer = 0
    }
    return answer;
}