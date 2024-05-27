function solution(arr, flag) {
    var answer = [];
    
    for(let i = 0; i < flag.length; i++){
        if(flag[i] === true){
            answer.push(...Array(arr[i]*2).fill(arr[i]))
        }
        if(flag[i] === false){
            answer.splice(answer.length - arr[i] , arr[i])
        }
    }
    
    
    
    return answer;
}