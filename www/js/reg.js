$(function () {
    // 账号
    userAut()
})
// 短信
function swsVer(cb) {
    $("#in-sws").css({ "color": "#FA2A83" })
    $("#in-user").css({ "color": "#666" })
    let htmlstr = `
        <!-- 账号 -->
        <div class="control_group">
            <div class="form_item_group">
                <input type="text" placeholder="请输入手机号码" id="cellphone">
                <span></span>
                <i class="gr_bj gr_sj_bj"></i>
                <div class="form_hint"></div>
            </div>
        </div>
        <!-- 验证码 -->
        <div class="control_group">
            <div class="form_item_group form_item_mobile">
                <div class="clear_fix">
                    <input type="text" placeholder="请输入验证码">
                    <b  id="yzmgo" class="bukey">获取验证码</b>
                    <span></span>
                    <i class="gr_bj gr_yzm_bj"></i>
                </div>
                <div class="form_hint"></div>
            </div>
        </div>
        <!-- 密码 -->
        <div class="control_group">
            <div class="form_item_group">
                <input type="text" placeholder="密码由6-20位字母，数字和符号组成" id="pass">
                <span></span>
                <i class="gr_bj gr_mm_bj"></i>
                <div class="form_hint"></div>
            </div>
        </div>
        <!-- 确定密码 -->
        <div class="control_group">
            <div class="form_item_group">
                <input type="text" placeholder="再次输入上面的密码" id="detpass">
                <span></span>
                <i class="gr_bj gr_mm_bj"></i>
                <div class="form_hint"></div>
            </div>
        </div>
    `
    $(".tab-s").show().html(htmlstr)
    $(".tab-z").hide().html("")
    cb&&cb()
}

// 账号
function userAut() {
    $("#in-user").css({ "color": "#FA2A83" })
    $("#in-sws").css({ "color": "#666" })
    let htmlstr = `
    <!-- 账号 -->
    <div class="control_group">
        <div class="form_item_group">
            <input type="text" placeholder="手机号/用户名/邮箱/6-20位字母" id="name">
            <span></span>
            <i class="user-form"></i>
            <div class="form_hint"></div>
        </div>
    </div>
    <!-- 密码 -->
    <div class="control_group">
        <div class="form_item_group">
            <input type="password" placeholder="密码由6-20位字母，数字和符号组成" id="pass">
            <span></span>
            <i class="gr_bj gr_mm_bj"></i>
            <div class="form_hint"></div>
        </div>
    </div>
    <!-- 确定密码 -->
    <div class="control_group">
        <div class="form_item_group">
            <input type="password" placeholder="再次输入上面的密码" id="detpass">
            <span></span>
            <i class="gr_bj gr_mm_bj"></i>
            <div class="form_hint"></div>
        </div>
    </div>
    `
    $(".tab-z").show().html(htmlstr)
    $(".tab-s").hide().html("")
    // 异步判断函数
    userCj()
}

// $(".form_item_group span").click(function(){
//    let value =  $(this).prev().val()
//    console.log(value)
// })
function userCj() {
    $("#name").blur(function () {
        checkUser()
    })
    // 确定密码
    $("#detpass").blur(function () {
        confirmPass()
    })
    // 密码格式验证
    $("#pass").blur(function () {
        passValidation()
    })
    let $name = $("#name")
    let isCheckuser = false
    // 验证用户是否存在
    function checkUser(cb) {
        let str = /^[a-z0-9]{6,16}$/
        if ($name.val() == "") {
            isCheckuser = false
            $name.next().html("×").css({ "color": "red" })
            $name.next().next().next().html("用户名不能为空").css({ "color": "red" })
            return
        } else {
            if (str.test($name.val())) {
                $.get("./php/checkUser.php", {
                    "username": $name.val()
                }, (data) => {
                    if (data == "1") {
                        isCheckuser = true
                        $name.next().html("√").css({ "color": "green" })
                        $name.next().next().next().html("用户名输入正确").css({ "color": "green" })
                        cb && cb()
                    } else {
                        isCheckuser = false
                        $name.next().html("×").css({ "color": "red" })
                        $name.next().next().next().html("用户名已存在，请重新输入").css({ "color": "red" })
                    }
                })

            } else {
                isCheckuser = false
                $name.next().html("×").css({ "color": "red" })
                $name.next().next().next().html("用户名输入错误,请重新输入").css({ "color": "red" })
                return
            }
        }
    }

    let $pass = $("#pass")
    function passValidation() {
        let str = /^[a-z0-9^\s]{6,16}$/
        if ($pass.val() == "") {
            $pass.next().html("×").css({ "color": "red" })
            $pass.next().next().next().html("密码不能为空").css({ "color": "red" })
            isCheckuser = false
            return
        } else {
            if (str.test($pass.val())) {
                $pass.next().html("√").css({ "color": "green" })
                $pass.next().next().next().html("密码正确").css({ "color": "green" })
                isCheckuser = true
            } else {
                $pass.next().html("×").css({ "color": "red" })
                $pass.next().next().next().html("密码错误,请从新输入").css({ "color": "red" })
                isCheckuser = false
            }
        }
    }

    let $detpass = $("#detpass")
    function confirmPass() {
        if ($detpass.val() == "") {
            $detpass.next().html("×").css({ "color": "red" })
            $detpass.next().next().next().html("密码不能为空").css({ "color": "red" })
            isCheckuser = false
        } else {
            if ($detpass.val() == $pass.val()) {
                isCheckuser = true
                $detpass.next().html("√").css({ "color": "green" })
                $detpass.next().next().next().html("密码正确").css({ "color": "green" })
            } else {
                $detpass.next().html("×").css({ "color": "red" })
                $detpass.next().next().next().html("两次密码不同，请重新输入").css({ "color": "red" })
                isCheckuser = false
            }
        }

    }
    $(".form_btn").click(function () {
        checkUser(reg)
    })

    // 注册
    function reg() {
        let i = $(".ui_group").find(":checkbox").prop("checked")
        if (i) {
            if (isCheckuser) {
                $.post("./php/addUser.php", {
                    "username": $name.val(),
                    "userpass": $pass.val()
                }, function (data) {
                    if (data == "success") {
                        $("#mvy").html("注册成功，请<a href='login.html'>登录</a>").css({ "color": "green" })
                    } else if (data == "fail") {
                        $("#mvy").html("注册失败，请重新注册").css({ "color": "red" })
                    }
                })
            } else {
                alert("请仔细阅读信息，再进行注册")
            }
        } else {
            $(".jstk").html("请同意以上条款")
        }

    }
}
$("#in-user").click(function () {
    userAut(userCj)
})
$("#in-sws").click(function () {
    swsVer(cellphonereg)
})

// 手机号注册
function cellphonereg(cb){
    let isCheckuser = false
    let $cellPhone = $("#cellphone") 
    let $detpass = $("#detpass")
    let $pass = $("#pass")
    $cellPhone.blur(function(){
        let str = /^1\d{10}/
        if($cellPhone.val()==""){
            isCheckuser = false
            $cellPhone.next().html("×").css({ "color": "red" })
            $cellPhone.next().next().next().html("手机号不能为空").css({ "color": "red" })
            return
        }else{
            if(str.test($cellPhone.val())){
                isCheckuser = true
                $cellPhone.next().html("√").css({ "color": "green" })
                $cellPhone.next().next().next().html("手机号格式正确").css({ "color": "green" })
                $("#yzmgo").addClass("keyon").removeClass("bukey")
                cb&&cb()
            }else{
                isCheckuser = false
                $cellPhone.next().html("×").css({ "color": "red" })
                $cellPhone.next().next().next().html("手机号格式格式错误请重新输入").css({ "color": "red" })
                $("#yzmgo").addClass("bukey").removeClass("keyon")
            }
        }
    })

    // 获取验证吗
    $("#yzmgo").click(function(){
        alert("暂时无法使用")
    })
    
    $pass.blur(function(){
            let str = /^[a-z0-9^\s]{6,16}$/
            if ($pass.val() == "") {
                $pass.next().html("×").css({ "color": "red" })
                $pass.next().next().next().html("密码不能为空").css({ "color": "red" })
                isCheckuser = false
                return
            } else {
                if (str.test($pass.val())) {
                    $pass.next().html("√").css({ "color": "green" })
                    $pass.next().next().next().html("密码正确").css({ "color": "green" })
                    
                    isCheckuser = true
                } else {
                    $pass.next().html("×").css({ "color": "red" })
                    $pass.next().next().next().html("密码错误,请从新输入").css({ "color": "red" })
                    isCheckuser = false
                }
            }
        
    })
    
    
    $detpass.blur(function(){
            if ($detpass.val() == "") {
                $detpass.next().html("×").css({ "color": "red" })
                $detpass.next().next().next().html("密码不能为空").css({ "color": "red" })
                isCheckuser = false
            } else {
                if ($detpass.val() == $pass.val()) {
                    isCheckuser = true
                    $detpass.next().html("√").css({ "color": "green" })
                    $detpass.next().next().next().html("密码正确").css({ "color": "green" })
                } else {
                    $detpass.next().html("×").css({ "color": "red" })
                    $detpass.next().next().next().html("两次密码不同，请重新输入").css({ "color": "red" })
                    isCheckuser = false
                }
            }
    
        
    })
    
}
