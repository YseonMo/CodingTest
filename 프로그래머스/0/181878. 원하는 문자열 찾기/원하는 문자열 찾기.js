function solution(myString, pat) {
    var answer = 0;
    let myString2 = myString.toUpperCase();
    let pat2 = pat.toUpperCase();
    console.log(`${myString2}, ${pat2}`)
    
    for(let i = 0; i < pat2.length; i++){
        if(pat2.length > myString.length){
            answer = 0;
        } else {
            if(myString2.includes(pat2)){
                answer = 1;
            } else {
                answer = 0;
            }
        }
    }
    
    return answer;
}