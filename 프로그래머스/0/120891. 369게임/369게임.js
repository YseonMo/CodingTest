function solution(order) {
    let count = 0
    let newOrder = String(order).split('')
    
    for(let i = 0; i < newOrder.length; i++){
        if(newOrder[i] === '3'){
            count = count + 1
        }
        if(newOrder[i] === '6'){
            count = count + 1
        }
        if(newOrder[i] === '9'){
            count = count + 1
        }
    } return count
}