let userName = getCookie("userName")

function totalMoney() {
    let money = 0
    let Snum = 0
    let $tr = $(".orders-table tr")
    $tr.each(function () {
        Snum++
        $(".num-sph").html(Snum)
        money += parseFloat($(this).find("td").eq(3).find(".total-cost").html())
    })
    $(".z-je").html(money)
    $(".num-je").html(money)
}

$(function () {
    time()
    getAccount()
    if (userName != null) {
        $("#logins").css({ "display": "none" })
        getShoppingCar(addEvent, totalMoney);
        setTimeout(function () {
            additems()
        }, 2000)
    }

})
function getShoppingCar(cb, to) {
    if (userName != null) {
        $.get("./php/getShoppingCart.php", { "vipName": userName }, function (datas) {
            let htmlStr = ""
            console.log(datas)
            datas.forEach(item => {
                htmlStr += `
                    <tr>
                            <td class="product-item">
                            <div class="m-product">
                                <div class="product-pic-trigger">
                                    <a href="">
                                        <img src="${item.goodsImg}" alt="">
                                    </a>
                                    <div class="c-big-img">
                                        <img src="${item.goodsImg}" alt="">
                                    </div>
                                </div>
                                <h3 class="product-title">
                                    <span class="u-saletype ">自营</span>
                                    <a href="">${item.goodsName}</a>
                                </h3>
                                <p class="product-size">${item.beiyong3}</p>
                                <div class="product-price-tip">
                                    <span class="product-tip">快抢价</span>
                                </div>
                            </div>
                        </td>
                        <td class="price-item">
                            <div class="goodsid">${item.goodsId}</div>
                            <div class="m-price">
                                <span class="u-yen">￥</span>
                                <strong class="u-price unit-p">${item.goodsPrice}</strong>
                            </div>
                            <div class="m-price market-price">
                                <span class="u-yen">￥</span>
                                <span class="u-price">${item.beiyong1}</span>
                            </div>
                        </td>
                        <td class="quantity-item">
                            <div class="m-amount">
                                <span class="amount-trigger shoppingless">-</span>
                                <div class="amount-num">
                                    <input type="text" name="" id="" value="${item.goodsCount}">
                                </div>
                                <span class="amount-trigger amount-trigger-plus shoppingadd">+</span>
                            </div>
                        </td>
                        <td class="subtotal-item2">
                            <span class="m-price  subtotal-price">
                                <span class="u-yen">￥</span>
                                <strong class="u-price total-cost">${item.goodsPrice * item.goodsCount}</strong>
                            </span>
                        </td>
                        <td class="actions-item2">
                            <div class="c-order-button-del">
                                删除
                            </div>
                        </td>
                    </tr>              
                    `
            });
            $(".orders-table").html(htmlStr)
            cb()
            to()
            additems()
        }, "json")
    }

}

function updateCount(goodsId, goodsCount, cb) {
    $.get("./php/updateGoodsCount.php", {
        "vipName": userName,
        "goodsId": goodsId,
        "goodsCount": goodsCount,
    }, function (data) {
        if (data == "0") {
            alert("失败")
        } else {
            cb()
        }
    })
}
function deletes(goodsId, vipName, cb) {
    $.get("./php/deleteGoods.php", {
        "vipName": vipName,
        "goodsId": goodsId,
    }, function (data) {
        if (data == "0") {
            alert("失败")
        } else {
            recover(goodsId)
            console.log(goodsId)
            cb()
        }
    })
}
let num = [1]

function recover(goodsId) {

    let strnum = 0
    for (let i = 0; i < num.length; i++) {
        if (goodsId == num[i]) {
            strnum++
            return
        }
    }
    if (strnum == 0) {
        num.push(goodsId)
        $.get("./php/getGoodsInfo.php", "goodsId=" + goodsId, function (data) {
            recording(data, reduction)
        }, "json")
    }

}
function recording(data, cb) {
    
    let $html = $(".active-pannel").html()
    $html += `
    <div class="c-goods">
        <div class="c-goods-img">
            <img src="${data.goodsImg}" alt="">
        </div>
        <h3 class="c-goods-tit">
            <a href="">
                ${data.goodsName}
            </a>
        </h3>
        <p>${data.beiyong3}</p>
        <span>
            <b>￥</b><b>${data.goodsPrice}</b>
            <span class="goodinstr">${data.goodsId}</span>
            <em class="reduction">重新购买</em>
        </span>
    </div>
    `
    $(".active-pannel").html($html)
    cb()
}
function reduction() {
    $(".reduction").click(function () {
        let goodsId = $(this).prev().html()
        $.post("./php/addShoppingCart.php", {
            "vipName": userName,
            "goodsId": goodsId,
            "goodsCount": 1,
        }, (data) => {
            if (data == "0") {
                alert("失败")
            } else {
                getShoppingCar(addEvent, totalMoney)
                setTimeout(function () {
                    additems()
                }, 2000)
            }
        })
    })
}


function addEvent() {
    $(".shoppingadd").click(function () {
        let goodsId = $(this).parent().parent().prev().find(".goodsid").html()
        let connt = $(this).prev().find("input").val()
        connt++
        updateCount(goodsId, connt, () => {
            $(this).prev().find("input").val(connt)
            let price = $(this).parent().parent().prev().find(".unit-p").html()
            $(this).parent().parent().next().find(".total-cost").html(connt * price)
            totalMoney();
        })
    })
    $(".shoppingless").click(function () {
        let goodsId = $(this).parent().parent().prev().find(".goodsid").html()
        let connt = $(this).next().find("input").val()
        if (connt <= 1) {
            return
        }
        connt--
        updateCount(goodsId, connt, () => {
            $(this).next().find("input").val(connt)
            let price = $(this).parent().parent().prev().find(".unit-p").html()
            $(this).parent().parent().next().find(".total-cost").html(connt * price)
            totalMoney();
        })
    })
    $(".c-order-button-del").click(function () {
        let goodsId = $(this).parent().prevAll().eq(2).find(".goodsid").html()
        deletes(goodsId, userName, () => {
            $(this).parent().parent().remove()
            totalMoney();
            additems()
        })
    })

}
function additems() {
    let $gTab2 = $(".g-tab-02")
    let $gTab1 = $(".g-tab-01")
    let $table = $(".orders-table").children()
    if ($table.length <= 0) {
        $gTab2.css({ "display": "none" })
        $gTab1.css({ "display": "block" })
    } else {
        $gTab2.css({ "display": "block" })
        $gTab1.css({ "display": "none" })
    }
}
function getAccount() {
    if (userName != null) {
        $(".logingo").html("用户" + userName)
        $(".register").addClass("logout").html("注销")
        remove()
    } else {
        $(".logingo").html(`<a href="./login.html" class="clear_bg">请登录</a>`)
        if ($(".register").hasClass("logout")) {
            $(".register").removeClass("logout").html(`<a href="./reg.html">注册</a>`)
        } else {
            $(".register").html((`<a href="./reg.html">注册</a>`))
        }
    }
}
function remove() {
    $(".logout").click(function () {
        removeCookie("userName")
        getAccount()
    })

}
function time() {
    let nowtime = 1800
    setInterval(function () {
        nowtime = nowtime - 1;
        let minute = parseInt(nowtime / 60);
        if (minute < 10) {
            minute = "0" + minute
        }
        let second = parseInt(nowtime % 60);
        if (second < 10) {
            second = "0" + second
        }

        $(".minutes").html(minute)
        $(".seconds").html(second)
    }, 1000);
}