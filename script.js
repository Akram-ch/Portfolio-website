const toggleBtn = document.getElementsByClassName('toggle-button')[0];
const navLinks = document.getElementsByClassName('nav-links')[0];
const imgBox = document.getElementsByClassName('imgbox')[0];

toggleBtn.addEventListener('click', ()=>{
    navLinks.classList.toggle('active');
    imgBox.classList.toggle('hidden');
})