function solution(id_pw, db) {
    for (let i = 0; i < db.length; i++) {
        if (id_pw[0] === db[i][0] && id_pw[1] === db[i][1]) {
            return "login"; // 아이디와 비밀번호가 일치하면 즉시 반환
        }
    }
    
    for (let i = 0; i < db.length; i++) {
        if (id_pw[0] === db[i][0]) {
            return "wrong pw"; // 아이디가 존재하지만 비밀번호가 틀린 경우
        }
    }

    return "fail"; // 아이디가 존재하지 않는 경우
}
