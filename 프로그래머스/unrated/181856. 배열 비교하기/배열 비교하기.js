function solution(arr1, arr2) {
    var answer = 0;
    let sumArr = 0;
    let sumArr2 = 0;
    
    if(arr1.length !== arr2.length){
        if(arr1.length > arr2.length){
            answer = 1
        } else {
            answer = -1
        }
    }else {
        for(let i = 0; i < arr1.length; i++){
            sumArr += arr1[i]
            sumArr2 += arr2[i]
            if(sumArr > sumArr2){
                answer = 1
            } else if(sumArr < sumArr2) {
                answer = -1
            } else {
                answer = 0
            }
        }
    }
    return answer;
}