const burguerMenu = document.getElementById('burguer');
burguerMenu.addEventListener('click', toggleMenu);

function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}