function getData(goodsId) {
    $.get("./php/getGoodsInfo.php", "goodsId=" + goodsId, function (data) {
        showData(data)
    }, "json")
}
let userName = getCookie("userName")
function showData(data) {
    let strimg = `<img src="${data.goodsImg}" alt="">`
    $("#g-imgtion").html(strimg)
    let htmlStr = `
        <img src="${data.goodsImg}" alt="">
        <em class="iconfont icon-sousuo">
        </em>
        `
    $("#h-img-box").html(htmlStr)
    let moStr = `
        <li>
      
            <img src="${data.beiyong5}" alt="">
       
    </li>
    <li>
      
            <img src="${data.beiyong6}" alt="">
     
    </li>
    <li>
 
  
    </li>
    <li>
  
            <img src="${data.beiyong8}" alt="">

    </li>
    <li>

            <img src="${data.beiyong8}" alt="">

    </li>
        `
    $("#m-box").html(moStr)
    let iFlagBox = `
            <p></p>
            <a href="">欧莱雅</a>
    `
    $("#i-flag-box").html(iFlagBox)
    // if(data.beiyon4==null){
    //     data.beiyon4=""
    // }
    let iPibTitle = `
        <span>包税</span>
        <h5>${data.goodsName}</h5>
        <b class="b-sp">${data.beiyong4}<b>
        <p>
            ${data.goodsDesc}
        </p>
    `
    $("#i-pib-title").html(iPibTitle)
    let iSpInfo = `
                    <span class="sp-tit">折后价</span>
                    <i class="pbox-yen">￥</i>
                    <span class="sp-price">${data.goodsPrice}</span>
                    <span class="sp-postfix"></span>
                    <span class="pbox-market">
                        ￥
                        <i>${data.beiyong1}</i>
                    </span>
                    <span class="sp-discount">${data.beiyong2}折</span>
    `
    $("#i-sp-info").html(iSpInfo)
    let guige = `
    <span class="color-item-name">${data.beiyong3}</span>
    <span class="i-select"></span>
    
    `
    $("#guige").html(guige)


    let ys = `
    <dt class="address-name float_left">颜色</dt>

    <dd class="c-address float_left">
        <ul>
            <li class="color-list-item">
                <a href="" class="hig-tit-pic">
                    <span class="color-pic-wrapper">
                        <img src="${data.beiyong11}" alt="${data.beiyong10}">
                    </span>
                    <span class="color-item-name">${data.beiyong10}</span>
                    <span class="i-select"></span>
                </a>
            </li>
            <li class="color-list-item">
                <a href="">
                    <span class="color-pic-wrapper">
                        <img src="${data.beiyong9}" alt="${data.beiyong10}">
                    </span>
                    <span class="color-item-name">${data.beiyong10}</span>
                    <span></span>
                </a>
            </li>
            <li class="color-list-item">
                <a href="">
                    <span class="color-pic-wrapper">
                        <img src="${data.beiyong11}" alt="">
                    </span>
                    <span class="color-item-name">${data.beiyong12}</span>
                    <span></span>
                </a>
            </li>
        </ul>
    </dd>
    `
    if (data.beiyong9 != "") {
        $("#leix").html(ys)
    }
    tabBig()
    dianji()
    boximgBk()
}
$(".c-address").click(function () {
    $(this).find("div").css({ "border-bottom": "none" })
    $(".address-main").css({ "display": "block", "z-index": "10" })
})
$(".J_province_container li").click(function () {
    let valsf = $(this).html()
    console.log(valsf)
    $("#dqlr").html(valsf)
})
$(".addres-close").click(function () {
    $(".c-address").find("div").css({ "border-bottom": "1px solid #ccc" })
    $(".address-main").css({ "display": "none", "z-index": "-1" })
})

$(".j-add").click(function () {
    let num = parseInt($("#goods-num").val())
    num++
    $("#goods-num").val(num)
    if (num > 1) {
        $(".j-disabled").css({ "cursor": "pointer", "color": "#333" })
    } else if (num == 1 || num < 1) {
        $(".j-disabled").css({ "cursor": "not-allowed", "color": "#999" })
    }
})
$(".j-disabled").click(function () {
    let num = parseInt($("#goods-num").val())
    if (num > 1) {
        $(this).css({ "cursor": "pointer", "color": "#333" })
    } else if (num == 1 || num < 1) {
        $(this).css({ "cursor": "not-allowed", "color": "#999" })
        return
    }
    num--
    $("#goods-num").val(num)
})
$(function () {
    let goodsId = location.search.split("=")[1]

    $("#btnAddShoppingCar").click(function () {
        addShoppingCar(goodsId)

    })
    getData(goodsId)
    numadd()


})
function yangci() {
    setTimeout(function () {
        addAbgyc()
    }, 3000)
}
function addShoppingCar(goodsId) {
    if (userName != null) {
        $.post("./php/addShoppingCart.php", {
            "vipName": userName,
            "goodsId": goodsId,
            "goodsCount": $("#goods-num").val(),
        }, (data) => {
            if (data == "0") {
                alert("失败")
            } else {
                addAbgxs(yangci)
                numadd()
                getShoppingCarbjg()

            }
        })
    } else {
        alert("请先登录")
    }

}

// 放大镜

function tabBig() {
    let boxImg = $(".zoomPad")
    let boxJz = $(".big-img")
    let boxBj = $(".big-glass")

    let boxImgleft = boxImg.offset().left;
    let boxImgtop = boxImg.offset().top;
    console.log(boxImgleft)
    console.log(boxImgtop)

    let boxBjWidth = boxBj.innerWidth()
    let boxBjHeight = boxBj.innerHeight()
    console.log(boxBjWidth)
    console.log(boxBjHeight)

    boxImg.mouseenter(function () {
        boxJz.css({ "display": "block" })
        boxBj.css({ "display": "block" })
    })
    $(".slide-mid").mouseleave(function () {
        boxJz.css({ "display": "none" })
        boxBj.css({ "display": "none" })
    })
    $(".slide-mid").mousemove(function (event) {
        var e = event || window.event
        let left1 = e.pageX - boxImgleft - boxBjWidth / 2
        let top1 = e.pageY - boxImgtop - boxBjHeight / 2



        if (left1 <= 0) {
            left1 = 0
        } else if (left1 + boxBjWidth >= 420) {
            left1 = 420 - boxBjWidth
        }
        if (top1 <= 0) {
            top1 = 0
        } else if (top1 + boxBjHeight >= 420) {
            top1 = 420 - boxBjHeight
        }
        boxBj.css({ "left": left1, "top": top1 })
        boxJz.find("img").css({ "left": -left1 * 2, "top": -top1 * 2 })

    })
}
// 点击函数
function dianji() {
    $("#m-box li").click(function () {
        let nth = $(this).find("img").attr("src")
        $(".zoomPad").find("img").attr('src', nth)
        boximgBk()
    })
}
function boximgBk() {
    let srcs = $(".zoomPad").html()
    $("#boximg").html(srcs)
}





