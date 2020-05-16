
$(function () {
    autoPlay()
})
// 轮播图
let oul = 0
let $li = $("#yd>li")
let $img = $("#banner>img")
let myTime = null
let herfs = [
]
let ds = 0
function autoPlay() {

    myTime = setInterval(() => {
        goImg(oul + 1)
    }, 3000);
}

function stopPlay() {

    clearInterval(myTime)
    myTime = null
}
function goImg(tuoul) {

    if (tuoul == oul) {
        return
    }
    if (tuoul > $img.length - 1) {
        tuoul = 0
    } else if (tuoul < 0) {
        tuoul = $img.length - 1
    }
    let outoul = oul
    oul = tuoul

    $img.eq(outoul).animate({ "opacity": 0 }, 800)
    $img.eq(oul).animate({ "opacity": 1 }, 800)
    $li.eq(outoul).css({ "border-bottom": "3px solid #fff" })
    $li.eq(oul).css({ "border-bottom": "3px solid #f10180" })


}

$($img).mouseover(function () {
    stopPlay()
})
$($img).mouseout(function () {
    autoPlay()
})
$($li).click(function (event) {
    stopPlay()
    // oul = $(this).index()
    goImg($(event.target).index())
})
$("#banner>span").eq(0).click(function () {
    stopPlay()
    goImg(oul + 1)
})
$("#banner>span").eq(1).click(function () {
    stopPlay()
    goImg(oul - 1)
})
$($img).click(function () {
    window.open(herfs[oul])
})
$("#banner>span").mouseover(function () {
    $(this).css({ "background": "rgba(0,0,0,.8)" })
})
$("#banner>span").mouseout(function () {
    $(this).css({ "background": "rgba(0,0,0,.2)" })
})

// 吸顶
window.onscroll = function () {
    let gdt = document.documentElement.scrollTop || document.body.scrollTop;
    let topNav = document.getElementById("top_nav");
    let topUl = document.getElementById("top_nav_ul");
    let leftNav =document.getElementById("left_nav");
    let rightNav = document.getElementById("right_nav");
    if (gdt >= 128) {
        topUl.style.cssText = `
            position:absolute;
            margin-left:-585PX;
            left:50%
        `;
        topNav.style.cssText = `
            border-bottom:1px solid #ccc;
            position :fixed;
            top :0;
            width: 100%;
            z-index:50;
            box-shadow:#d5d5d5 0px 2px 5px 1px;
        `;
    } else {
        topNav.style.cssText = `
            barder:0px solid #ccc;
            position:static;
            margin:0 auto;
            width:1170px;
        `; 
    };
    if(gdt>=1200){
        leftNav.style.display="block";
    }else{
        leftNav.style.display="none";
    };
    if(gdt>1921){
        let wz = Math.ceil((gdt-1921)/850)
            $(".left_nav a").eq(wz-1).css({"background":"#fa2a83","color":"#fff","border-radius":" 4px"}).siblings()
            .css({"background":"#fff","color":"#666","border-radius":" 0px"})
  
    }
    
};
// window.onscroll = function(){
//     let gdt = document.documentElement.scrollTop || document.body.scrollTop;
//     console.log(gdt)
// }
$(".left_nav a").click(function(){
    $(this).css({"background":"#fa2a83","color":"#fff","border-radius":" 4px"}).siblings()
    .css({"background":"#fff","color":"#666","border-radius":" 0px"})
    $(this).removeClass("acolor").siblings().addClass("acolor")
})
Math.ceil(.1)