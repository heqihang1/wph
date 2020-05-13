function getData() {
    let str = location.search;//?goodsId=01001
    let arr = str.split("="); //["?goodsId","01001"]   
    let goodsId = arr[1];

    $.get("./php/getGoodsInfo.php", "goodsId=" + goodsId, function (data) {
        showData(data)
    }, "json")
}

function showData(data) {
    let htmlStr = `
        <img src="${data.goodsImg}" alt="">
        <em class="iconfont icon-sousuo">
        </em>
        `
    $("#h-img-box").html(htmlStr)
    let moStr = `
        <li>
        <a href="">
            <img src="${data.beiyong5}" alt="">
        </a>
    </li>
    <li>
        <a href="">
            <img src="${data.beiyong6}" alt="">
        </a>
    </li>
    <li>
        <a href="">
            <img src="${data.beiyong7}" alt="">
        </a>
    </li>
    <li>
        <a href="">
            <img src="${data.beiyong8}" alt="">
        </a>
    </li>
    <li>
        <a href="">
            <img src="${data.beiyong13}" alt="">
        </a>
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
    let iPibTitle=`
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
    let guige=`
    <span class="color-item-name">${data.beiyong3}</span>
    <span class="i-select"></span>
    
    `
    $("#guige").html(guige)


    let ys=`
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
    if(data.beiyong9 != ""){
        $("#leix").html(ys)
    }
}
$(function () {
    getData();
})