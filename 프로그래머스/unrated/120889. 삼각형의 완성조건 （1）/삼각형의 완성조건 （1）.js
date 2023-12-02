function solution(sides) {
    var answer = 0;
    sides = sides.sort();
    let max = sides[sides.length - 1];
    answer = sides[0] + sides[1] > max ? 1 : 2
    
    return answer;
}