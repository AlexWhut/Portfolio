function toggleMenu() {
    var menus = document.querySelectorAll(".mobile-menu");
    menus.forEach(function(menu) {
        menu.classList.toggle("active");
    });

    var btn = document.querySelector(".dropdown-btn");
    btn.classList.toggle("change");
}


document.getElementById('hamburgerToggle').addEventListener('click', function () {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('hidden');
});
