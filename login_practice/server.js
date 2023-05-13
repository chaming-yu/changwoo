// DB
const users = [{id:1, username:"김도환", password:'1234'},{id:2, username:"유창우", password:'1234'}];
//====

function checkUsername(username){
    const user = users.find(user=> user.username === username);
    return user;
}

function checkPassword(user, password){
    if(user.password === password){
        return true;
    } else {
        return false;
    }
}

function validateUser(username, password){
    //유저가 있는지 없는지 확인한다.
    const user = checkUsername(username);

    if(user) {
        if(checkPassword(user, password)){
            // 인증 성공!
            console.log("로그인에 성공했습니다.")
        } else {
            console.log("패스워드가 틀렸습니다.")
        }
    } else {
        console.log("유저가 존재하지 않습니다.")
    }
}