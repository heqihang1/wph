let oul = 0
    let $li = $("#yd>li")
    let $img = $("#banner>img")
    let myTime = null
    let herfs = [
    "https://www.w3school.com.cn/",
    "https://www.baidu.com/",
    "https://youtube.com/",
    "https://maps.google.com/",
    "https://www.mi.com/"

    ]
    $(function () {
        autoPlay()
    })
    let ds = 0
    function autoPlay() {
       
        myTime = setInterval(() => {
            goImg(oul + 1)
        }, 4000);
     
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
        $li.eq(outoul).css({ "border-bottom": "3px solid #fff"})
        $li.eq(oul).css({ "border-bottom": "3px solid #f10180" })


    }
  
    $($img).mouseover(function(){
        stopPlay()
    })
    $($img).mouseout(function(){
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
    $($img).click(function(){
        window.open(herfs[oul])
    })
    $("#banner>span").mouseover(function(){
        $(this).css({"background":"rgba(0,0,0,.8)"})
    })
    $("#banner>span").mouseout(function(){
        $(this).css({"background":"rgba(0,0,0,.2)"})
    })
