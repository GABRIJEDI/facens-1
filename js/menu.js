const btnMobile = document.getElementById('btn-mobile');
const nav = document.getElementById('menu-principal');

function toggleMenu() {
    nav.classList.toggle('active');

    const isActive = nav.classList.contains('active'); 

    btnMobile.setAttribute('aria-expanded', isActive);

    btnMobile.setAttribute('aria-label', isActive ? 'Fechar Menu' : 'Abrir Menu');
}

if (btnMobile) {
    btnMobile.addEventListener('click', toggleMenu);
}