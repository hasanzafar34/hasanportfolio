const mBar = document.querySelector(".menubar");
const nbar = document.querySelector(".nav-menu");

mBar.addEventListener("click", ()=>{
    mBar.classList.toggle('active');
    nbar.classList.toggle('active');
})