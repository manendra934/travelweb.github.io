const slideNav =document.querySelector('.slide-nav');
const navBar =document.querySelector('.nav-bar');
slideNav.addEventListener('click',()=>{
    navBar.classList.toggle('active');
    slideNav.classList.toggle('active');
})