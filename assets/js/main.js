let mobilemenu = document.querySelector(".mobilemenu");
let slideInMenu = document.querySelector('.slidemenu');

// Hamburger Button @ maxWidth: 576px

mobilemenu.onclick = function () {
    this.classList.toggle("checked");
}

// Slide in Menu

function showMenu() {
    slideInMenu.classList.toggle('slidemenushow');
}

function closeMenu() {
    slideInMenu.style.left = '100%';
    slideInMenu.style.right = '-100%';
}