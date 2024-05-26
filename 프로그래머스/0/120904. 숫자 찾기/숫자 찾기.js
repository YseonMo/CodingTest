function solution(num, k) {
    if(String(num).indexOf(k) > -1){
        return String(num).indexOf(k) + 1
    } else {
        return -1
    }
}