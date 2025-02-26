function solution(emergency){
    let newEmergency = emergency.slice().sort((a,b) => b- a);
    return emergency.map(x => newEmergency.indexOf(x) + 1)
}