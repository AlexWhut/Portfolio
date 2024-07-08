document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('body');
    const modeToggle = document.getElementById('dark-mode-toggle');
    const modeIcon = document.getElementById('mode-icon');
    const svgImageMain = document.getElementById('svgImageMain');
    const redesLinks = document.querySelectorAll('#redes img'); 
    let isAnimating = false; 

    
    const lightModeSVG = 'Logos/FullSV.svg';
    const darkModeSVG = 'Logos/FullSVW.svg';


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

    
    const isDarkMode = localStorage.getItem('dark-mode') === 'true';
    if (isDarkMode) {
        body.classList.add('dark-mode');

       
        modeIcon.src = 'Logos/noche.svg';
        svgImageMain.src = darkModeSVG;

       
        redesLinks.forEach(link => {
            link.src = 'Logos/flechanoche.svg';
        });
    }


  
    const inicioLink = document.querySelector('nav a[href="#inicio"]');
    if (inicioLink) {
        inicioLink.addEventListener('click', function(event) {
            event.preventDefault();
            if (!isAnimating) {
                const targetPosition = 0;
                smoothScrollTo(targetPosition, 1000);
            }
        });
    }

   
    const headerHeight = document.querySelector('header').offsetHeight;
    const conocenosTitle = document.getElementById('conocenoss');

    
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            if (!isAnimating) { 
                const href = this.getAttribute('href');

                if (href === '#inicio') {
                    const targetPosition = 0;
                    smoothScrollTo(targetPosition, 1000);
                } else {
                    const targetId = href.substring(1);
                    const targetElement = document.getElementById(targetId);
                    const targetPosition = targetElement.offsetTop - headerHeight;

                    smoothScrollTo(targetPosition, 1000);
                }

                
                conocenosTitle.style.marginTop = `${headerHeight}px`; 
            }
        });
    });

    
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
                isAnimating = false; 
            }
        }

        animateScroll();
    }
});


