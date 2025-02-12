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

    // Variables para controlar la animación
    let animationDuration = 20000; // Duración total de la animación en milisegundos
    let startTime = null;
    let currentProgress = 0; // Progreso actual de la animación
    let animationFrameId;

    // Función para actualizar la posición del carrusel
    function updateCarousel(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime; // Tiempo transcurrido en milisegundos
        currentProgress = (elapsed / animationDuration) * 100; // Progreso en porcentaje

        // Aplicar la transformación
        carousel.style.transform = `translateX(-${currentProgress}%)`;

        // Si el progreso es menor al 100%, seguir animando
        if (currentProgress < 100) {
            animationFrameId = requestAnimationFrame(updateCarousel);
        } else {
            // Reiniciar el progreso
            startTime = null;
            currentProgress = 0; // Reiniciar posición
            carousel.style.transform = 'translateX(0)'; // Reiniciar posición
            animationFrameId = requestAnimationFrame(updateCarousel);
        }
    }

    // Iniciar la animación después de un breve retraso
    setTimeout(() => {
        animationFrameId = requestAnimationFrame(updateCarousel);
    }, 100); // Ajusta el tiempo si es necesario

    // Pausar la animación al hacer hover
    carousel.addEventListener('mouseenter', () => {
        cancelAnimationFrame(animationFrameId);
    });

    // Reanudar la animación al salir del hover
    carousel.addEventListener('mouseleave', () => {
        startTime = performance.now() - (currentProgress / 100) * animationDuration; // Ajustar el tiempo de inicio
        animationFrameId = requestAnimationFrame(updateCarousel);
    });
});