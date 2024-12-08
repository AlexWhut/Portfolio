document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const logos = carousel.querySelectorAll('.logo');
    const totalLogos = logos.length;

    // Duplicar los logos para crear el efecto infinito
    for (let i = 0; i < totalLogos; i++) {
        const clone = logos[i].cloneNode(true);
        carousel.appendChild(clone);
    }

    // Ajustar el ancho del carrusel
    const carouselWidth = totalLogos * (logos[0].offsetWidth + 100); // 100 es el margen
    carousel.style.width = `${carouselWidth}px`;
});