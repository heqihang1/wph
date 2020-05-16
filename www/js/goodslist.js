
let navStr = null
let userName = getCookie("userName")
$("#jzgd").click(function(){
    unfold()
})
function unfold(){
    if(navStr==null){
        $("#nav-dh").addClass("min-ma").removeClass("mage")
        $("#jzgd").html("收起")
        navStr = 1
    }else{
        $("#nav-dh").removeClass("min-ma").addClass("mage")
        $("#jzgd").html("更多")
        navStr = null
    }
}
function getGoods(){
    $.get("./php/getGoodsList.php",function(data){
        showData(data)
    },"json")
}

function showData(data){
    let htmlStr =""
    data.forEach(item =>{
        htmlStr+=`
        <div class="goods-list-item">
        <div class="goods-box-info">
            <div class="goods-box">
                <div class="box-show-info">
                </div>
                <div class="goods-img">
                    <a href="ProductDetails.html?goodsId=${item.goodsId}">
                        <img src="${item.goodsImg}" alt="">
                    </a>
                </div>
                <div class="goods-tag">
                    <img src="./images/product/goods_icon_01.png" alt="">
                </div>
                <div class="goods-corner-tag">

                    
                </div>
                <div class="goods-special-price">
                    <div class="goods-price  ">
                        快抢价        <span>￥</span>
                        <b>${item.goodsPrice}</b>
                    </div>
                    <div class="goods-r">
                        <span>${item.beiyong1}</span>
                        <b>${item.beiyong1}</b>
                    </div>
                </div>
                <h4 class="goods-tit-info">
                    <a href="" class="">${item.goodsName}</a>
                </h4>
            </div>
        </div>
    </div>
        
        `
    })
    $("#box").html(htmlStr)
}
$(function(){
    getGoods()
})
