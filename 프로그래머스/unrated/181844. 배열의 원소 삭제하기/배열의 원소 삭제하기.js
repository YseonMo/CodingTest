function solution(arr, delete_list) {
    var answer = [];
    answer = arr.filter(v => !delete_list.includes(v))
    return answer;
}