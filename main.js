const nav = document.querySelector('nav');
const skills= document.querySelector('.skills');

window.addEventListener('scroll',()=>{
    // nav.classList.toggle('active',window.scrollY >0);
    if (window.scrollY > 0) {
        nav.classList.add('active');
        skills.classList.add('skills-show');
      } else {
        nav.classList.remove('active');
        skills.classList.remove('skills-show');
      }
})

