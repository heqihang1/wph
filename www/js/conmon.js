// 用户的获取

function getAccount() {
    let userName = getCookie("userName")
    if(userName!=null){
        $("#login").html("用户"+userName)
        $("#regs").addClass("logout").html("注销")
        remove()
    }else{
        $("#login").html(`<a href="./login.html" class="clear_bg">请登录</a>`)
        if($("#regs").hasClass("logout")){
            $("#regs").removeClass("logout").html(`<a href="./reg.html">注册</a>`)
        }else{
            $("#regs").html((`<a href="./reg.html">注册</a>`))
        }
    }
}
let str = unescape(document.cookie)
console.log(str)
function remove(){
    $(".logout").click(function(){
        removeCookie("userName")
        getAccount()
    })
    
}

// 购物车的获取
function numadd(){
    let Inum = 0
    let userName = getCookie("userName")
    if(userName!=null){
        $.get("./php/getShoppingCart.php",{"vipName":userName}, function(datal){
            console.log(datal)
            let htmlbigstr = ""
            datal.forEach(element => {
                Inum++
                htmlbigstr+=`
                <div id="goucil">
                
                    <div class="goucilimg">
                        <img src="${element.goodsImg}" alt="">
                        </div>
                        <div class=" goodlscs">
                            <h4>${element.goodsName}</h4>
                            <span>${element.beiyong3}</span>
                            
                            <i>￥${element.goodsPrice}</i>
                            <b>数量 ${element.goodsCount}</b>
                        </div>
                    <p>${element.goodsDesc}</p> 
                </div>
                `
            })
            $(".amount").html(Inum)
            $(".contentgood").html(htmlbigstr)
        },"json")
    }
}
$(".shoppimg-bage").click(function(){
    addAbgxs()
})
// 加入购物袋成功后的动画
function addAbgxs(cb){
    $("#gooldslistn").animate({
        "right":0
    },500)
    cb&&cb()

}
function addAbgyc(){
    $("#gooldslistn").animate({
        "right":-220
    },500)
}
$(".guanbi").click(function(){
    addAbgyc()
})

$(".l-user").click(function(){
    open.herf="login.html"
})
$(".l-user").click(function(){
    let userName = getCookie("userName")
    if(userName!=null){
        alert("您已近登录过了，查看个人资料以及修改尚未实装")
    }else{
        location.herf="login.html"
    }
    
})
$(function(){
    getAccount()
    numadd()
})
// 返回顶部
$("#topgo").click(function(){
    let gdt = document.documentElement.scrollTop || document.body.scrollTop;
    let mytime =  setInterval(() => {
        gdt -=100
        if(gdt<=0){
            clearInterval(mytime)
        }
        window.scrollTo(0,gdt)
    }, 10);
})
