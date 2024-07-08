document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const logos = carousel.querySelectorAll('.logo');
    const totalLogos = logos.length;
    const containerWidth = carousel.offsetWidth;
    const logoWidth = logos[0].offsetWidth;
    const cloneCount = Math.ceil(containerWidth / logoWidth);
  
    for (let i = 0; i < cloneCount; i++) {
        for (let j = 0; j < totalLogos; j++) {
            const logo = logos[j];
            const clone = logo.cloneNode(true);
            carousel.appendChild(clone);
        }
    }
  
    let position = 0;
    let speed = 1;
  
    
  
    function startCarousel() {
        moveCarousel();
    }

    startCarousel();
  
    function moveCarousel() {
        position -= speed;
        carousel.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(moveCarousel);
    }
  
    carousel.addEventListener('mousedown', function(event) {
        if (event.button === 0) {
            event.preventDefault();
        }
    });


});


window.addEventListener('wheel', function(event) {
   
    if (event.deltaX > 0) {
        
        event.preventDefault();
    }
}, { passive: false }); 
