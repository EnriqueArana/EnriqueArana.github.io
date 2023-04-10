const nav = document.querySelector('nav');

window.addEventListener('scroll',()=>{
    // nav.classList.toggle('active',window.scrollY >0);
    if (window.scrollY > 0) {
        nav.classList.add('active');
      } else {
        nav.classList.remove('active');
      }
})
