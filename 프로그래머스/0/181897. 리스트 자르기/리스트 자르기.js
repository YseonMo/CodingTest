function solution(n, slicer, num_list) {
    let [a,b,c] = slicer
    let answer;
    
    switch(n) {
        case 1: {
            answer = num_list.slice(0, b+1)
            break;
        }
        case 2: {
            answer = num_list.slice(a, num_list.length)
            break;
        }
        case 3: {
            answer = num_list.slice(a, b+1)
            break;
        }
        case 4: {
            let curStr = num_list.slice(a, b+1)
            answer = curStr.filter((_, i) => i % c === 0)
            break;
        }
        default:{
            break;
        }
    }
    return answer;
}