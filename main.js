const nav = document.querySelector('nav');
const logo = document.querySelector('.logo');
window.addEventListener('scroll',function(){
    nav.classList.toggle('active',window.scrollY >0);
})