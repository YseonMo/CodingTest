function solution(num_list) {
    let minus = num_list.find(num => num < 0)
    if(num_list.includes(minus)){
        return num_list.indexOf(minus)
    } 
    if(!num_list.includes(minus)){
        return -1
    }
    console.log(minus)
}