function solution(rsp) {
    var answer = [];
    rsp2 = [...rsp];
    console.log(rsp2)
    
    for(let i = 0; i < rsp2.length; i++){
        if(rsp2[i] === '2'){
            answer.push('0')
        } else if (rsp2[i] === '0'){
            answer.push('5')
        } else {
            answer.push('2')
        }
    }
    return answer.join('');
}