function solution(s){
    let answer = '';

    let newS = s.toLowerCase().split('')
    console.log(newS)
    let countP = 0;
    let countY = 0;
    
    for(let i = 0; i < newS.length; i++){
        if(newS[i] === 'p'){
            countP += 1
        } else if(newS[i] === 'y'){
            countY += 1
        }
        if(countP === countY){
            answer = true
        } else {
            answer = false
        }
        }
    return answer;
    }

    
