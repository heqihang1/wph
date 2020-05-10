
window.onscroll = function () {
    let gdt = document.documentElement.scrollTop || document.body.scrollTop
    let rightNav = document.getElementById("right_nav")
    if(gdt>=2200){
        rightNav.style.display="block"
    }else{
        rightNav.style.display="none"
    }
}