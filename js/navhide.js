var prevScroll = window.pageYOffset;
window.onscroll = function(){
const navBar =document.querySelector('.nav-bar');
var currentScroll = window.pageYOffset;
    if(prevScroll > currentScroll){
         navBar.style.top = "0px";
    }
    else{
        navBar.style.top = "-60px";
    }
    prevScroll = currentScroll;

}