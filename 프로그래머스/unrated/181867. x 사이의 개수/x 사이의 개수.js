function solution(myString) {
    var answer = [];
    let myString2 = myString.split('x')
    console.log(myString2)
    
    for(let i = 0; i < myString2.length; i++){
        answer.push(myString2[i].length)
    }
    return answer;
}