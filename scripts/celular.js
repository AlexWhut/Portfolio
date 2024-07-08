function toggleMenu() {
    var menus = document.querySelectorAll(".mobile-menu");
    menus.forEach(function(menu) {
        menu.classList.toggle("active");
    });

    var btn = document.querySelector(".dropdown-btn");
    btn.classList.toggle("change");
}
