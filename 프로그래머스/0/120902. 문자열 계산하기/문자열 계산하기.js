function solution(my_string) {
    let arr = my_string.split(" "); 
    let answer = Number(arr[0]); 

    for (let i = 1; i < arr.length; i += 2) {
        let operator = arr[i];  
        let num = Number(arr[i + 1]); 

        if (operator === "+") {
            answer += num;
        } else if (operator === "-") {
            answer -= num;
        }
    }

    return answer;
}

