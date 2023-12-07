function solution(num_list, n) {
    var answer = [];
    let front = num_list.slice(0,n)
    let behind = num_list.slice(n,num_list.length)
    
    return [...behind, ...front];
}