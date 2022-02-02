const bars = document.querySelector('.bars');
const navbar = document.querySelector('.navbar');
bars.addEventListener('click' , () =>{
    navbar.classList.toggle('nav-active');
});