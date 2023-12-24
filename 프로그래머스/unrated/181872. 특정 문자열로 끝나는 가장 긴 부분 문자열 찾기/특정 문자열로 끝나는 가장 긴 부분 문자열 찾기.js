function solution(myString, pat) {
    var answer = '';
    let lastindex = myString.lastIndexOf(pat);
    return myString.slice(0,lastindex + pat.length)
    
}