document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('body');
    const modeToggle = document.getElementById('dark-mode-toggle');
    const modeIcon = document.getElementById('mode-icon');
    const svgImageMain = document.getElementById('svgImageMain');
    const redesLinks = document.querySelectorAll('#redes img'); 
    let isAnimating = false; 

    const lightModeSVG = 'Logos/FullSV.svg';
    const darkModeSVG = 'Logos/FullSVW.svg';

    // Modo oscuro
    modeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');

        // Cambia el SVG dependiendo del modo
        if (body.classList.contains('dark-mode')) {
            modeIcon.src = 'Logos/noche.svg'; 
            svgImageMain.src = darkModeSVG; 

            redesLinks.forEach(link => {
                link.src = 'Logos/flechanoche.svg';
            });
        } else {
            modeIcon.src = 'Logos/dia.svg'; 
            svgImageMain.src = lightModeSVG;

            redesLinks.forEach(link => {
                link.src = 'Logos/flecha.svg';
            });
        }

        const isDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('dark-mode', isDarkMode);
    });

    // Cargar el modo oscuro desde localStorage
    const isDarkMode = localStorage.getItem('dark-mode') === 'true';
    if (isDarkMode) {
        body.classList.add('dark-mode');
        modeIcon.src = 'Logos/noche.svg';
        svgImageMain.src = darkModeSVG;

        redesLinks.forEach(link => {
            link.src = 'Logos/flechanoche.svg';
        });
    }

    // Desplazamiento suave al hacer clic en el logo
    const logoLink = document.getElementById('logoNav');
    const headerHeight = document.querySelector('header').offsetHeight;

    logoLink.addEventListener('click', function(event) {
        event.preventDefault(); // Evita que el enlace recargue la página
        if (!isAnimating) { // Solo permite la animación si no está en curso
            const targetPosition = document.getElementById('inicio').offsetTop - headerHeight; // Calcula la posición del inicio
            smoothScrollTo(targetPosition, 1000); // Llama a la función de desplazamiento suave
        }
    });

    // Desplazamiento suave para otros enlaces del nav
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            if (!isAnimating) { 
                const href = this.getAttribute('href');
                const targetElement = document.getElementById(href.substring(1));
                const targetPosition = targetElement.offsetTop - headerHeight;

                smoothScrollTo(targetPosition, 1000);
            }
        });
    });

    // Función de desplazamiento suave
    function smoothScrollTo(to, duration) {
        isAnimating = true; 
        const start = window.pageYOffset;
        const change = to - start;
        const increment = 20;
        let currentTime = 0;

        function easeInOutQuad(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        function animateScroll() {
            currentTime += increment;
            const val = easeInOutQuad(currentTime, start, change, duration);
            window.scrollTo(0, val);
            if (currentTime < duration) {
                setTimeout(animateScroll, increment);
            } else {
                isAnimating = false; // Permite nuevas animaciones
            }
        }

        animateScroll();
    }
});