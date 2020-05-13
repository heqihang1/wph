
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
};
// let ho = document.getElementById("hd")
// ho.onmouseover = function(){
    
//     let bb = document.getElementById("task")
//     bb.style.cssText = `
//         display: block;
//     `
// }
// ho.onmouseout = function(){
//     let bb = document.getElementById("task")
//     bb.style.cssText = `
//     display: none;
// `
// }
    
