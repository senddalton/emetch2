// Función de contacto WhatsApp
function contacto() {
    window.open('https://wa.me/+5216183274838?text=Hola,%20me%20gustaría%20contactarlos', '_blank');
}

// Configuración de carrusel automático
function setupAutoCarousel(carouselId, delay = 8000) {
    const carousel = document.getElementById(carouselId);
    if (!carousel) return;

    const cards = carousel.querySelectorAll('.card');
    if (cards.length === 0) return;

    let currentIndex = 0;
    const cardWidth = cards[0].offsetWidth + parseInt(window.getComputedStyle(cards[0]).marginRight);

    const moveCarousel = () => {
        currentIndex = (currentIndex + 1) % cards.length;
        carousel.scrollTo({
            left: currentIndex * cardWidth,
            behavior: 'smooth'
        });
    };

    // Iniciar auto-scroll
    const intervalId = setInterval(moveCarousel, delay);

    // Manejar eventos táctiles
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        clearInterval(intervalId);
    }, { passive: true });

    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        setTimeout(() => setupAutoCarousel(carouselId, delay), delay * 2);
    }, { passive: true });

    const handleSwipe = () => {
        if (touchEndX < touchStartX - 50) {
            // Swipe izquierda (next)
            currentIndex = Math.min(currentIndex + 1, cards.length - 1);
        } else if (touchEndX > touchStartX + 50) {
            // Swipe derecha (prev)
            currentIndex = Math.max(currentIndex - 1, 0);
        }
        carousel.scrollTo({
            left: currentIndex * cardWidth,
            behavior: 'smooth'
        });
    };
}

// Configuración de galería automática
function setupAutoGallery(containerSelector = '.gallery-slider', delay = 8000) {
    const slider = document.querySelector(containerSelector);
    if (!slider) return;

    const slides = slider.querySelectorAll('.gallery-slide');
    if (slides.length === 0) return;

    let currentSlide = 0;

    const showSlide = (index) => {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
        currentSlide = index;
    };

    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    };

    // Iniciar auto-slide
    const intervalId = setInterval(nextSlide, delay);

    // Manejar eventos táctiles
    let touchStartX = 0;
    let touchEndX = 0;

    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        clearInterval(intervalId);
    }, { passive: true });

    slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        setTimeout(() => setupAutoGallery(containerSelector, delay), delay * 2);
    }, { passive: true });

    const handleSwipe = () => {
        if (touchEndX < touchStartX - 50) {
            // Swipe izquierda (next)
            currentSlide = (currentSlide + 1) % slides.length;
        } else if (touchEndX > touchStartX + 50) {
            // Swipe derecha (prev)
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        }
        showSlide(currentSlide);
    };

    // Mostrar primer slide
    showSlide(currentSlide);
}

// Configuración de FAQ
function setupFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length === 0) return;

    faqItems.forEach(item => {
        const pregunta = item.querySelector('.faq-pregunta');
        if (!pregunta) return;

        const toggle = pregunta.querySelector('.faq-toggle');

        pregunta.addEventListener('click', () => {
            // Cierra otras preguntas abiertas
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    const otherToggle = otherItem.querySelector('.faq-toggle');
                    if (otherToggle) otherToggle.textContent = '+';
                }
            });

            // Abre/cierra la pregunta clickeada
            item.classList.toggle('active');
            if (toggle) toggle.textContent = item.classList.contains('active') ? '−' : '+';
        });
    });
}

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    setupAutoCarousel('carousel');
    setupAutoGallery();
    setupFAQ();
});