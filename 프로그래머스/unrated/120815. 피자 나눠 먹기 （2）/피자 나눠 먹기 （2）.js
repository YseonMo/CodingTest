function solution(n) {
    var answer = 0;
    let pizza = 1;
    
    while(6 * pizza % n){
        pizza++
    }
    return pizza;
}