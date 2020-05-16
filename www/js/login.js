$(function () {
    // 账号
    userAut()
})
// 扫码
function swsVer(){
    $("#in-sws").css({"color":"#FA2A83"})
    $("#in-user").css({"color":"#666"})
    $(".tob-l").show()
    $(".tob-r").hide()
}

// 账号
function userAut() {
    $("#in-user").css({"color":"#FA2A83"})
    $("#in-sws").css({"color":"#666"})
    $(".tob-r").show()
    $(".tob-l").hide()
}
$("#in-user").click(function(){
    userAut()
})
$("#in-sws").click(function(){
    swsVer()
})
$("#name").blur(function(){
    checkUser()
})
let $name = $("#name")
let isCheckuser = false
function checkUser(){
    let str = /^[a-z0-9]{6,16}$/
    if($name.val()==""){
        isCheckuser = false
        $name.next().html("×").css({"color":"red"})
        $name.next().next().next().html("用户名不能为空").css({"color":"red"})
        return
    }else{
        if(str.test($name.val())){
            isCheckuser = true
            $name.next().html("√").css({"color":"green"})
            $name.next().next().next().html("用户名格式正确").css({"color":"green"})
              
        }else{
            isCheckuser = false
            $name.next().html("×").css({"color":"red"})
            $name.next().next().next().html("用户名输入错误,请重新输入").css({"color":"red"})
            return
        }
    }
}
$("#pass").blur(function(){
    passValidation()
})

let $pass = $("#pass")
function passValidation(){
    let str = /^[a-z0-9^\s]{6,16}$/
    if($pass.val()==""){
        $pass.next().html("×").css({"color":"red"})
        $pass.next().next().next().html("密码不能为空").css({"color":"red"})
        isCheckuser = false
        return
    }else{
        if(str.test($pass.val())){
            $pass.next().html("√").css({"color":"green"})
            $pass.next().next().next().html("密码格式正确").css({"color":"green"})
            isCheckuser = true
        }else{
            $pass.next().html("×").css({"color":"red"})
            $pass.next().next().next().html("密码格式错误,请从新输入").css({"color":"red"})
            isCheckuser = false
        }
    }
}
$("#submitGo").click(function(){
    $.post("./php/login.php",{
        "username":$("#name").val(),
        "userpass":$("#pass").val()
    },show)
})
function show(data){
    if(data == "success"){
        addCookie("userName",$("#name").val(),1,"./")
        location.href = "index.html"
    }else if(data == "fail"){
        alert("登录失败，请从新登录")
    }
}