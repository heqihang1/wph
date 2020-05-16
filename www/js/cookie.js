//保存用户
function addCookie(key,value,time,path = "/") {
    let d = new Date
    d.setDate(d.getDate() + time)
    document.cookie = `${key} = ${escape(value)}; expires = ${d.toGMTString()};path=${path} `
}


// 查询用户

function getCookie(key){
    let cont = unescape(document.cookie)

    let str = cont.split("; ")

    for(let i = 0 ;i < str.length;i++){
        if(str[i].indexOf(key + "=") == 0){
            return str[i].split("=")[1]
        }
    }
    return null
}


// 删除用户

function removeCookie(key){
    addCookie(key,"",-1,"./")
}