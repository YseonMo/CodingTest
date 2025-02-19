function solution(myStr) {
    let myStr2 = myStr.replace(/[abc]/g, ' ').trim()
    let result = myStr2.split(/\s+/)
    return result.length > 0 && result[0] !== ''? result : ['EMPTY']
}