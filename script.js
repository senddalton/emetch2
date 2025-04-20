// Función de contacto WhatsApp
function contacto() {
    window.open('https://wa.me/+5216183274838?text=Hola,%20me%20gustaría%20contactarlos', '_blank');
}

// Configuración de carrusel automático mejorado
function setupAutoCarousel(carouselId, delay = 8000) {
    const carousel = document.getElementById(carouselId);
    if (!carousel) {
        console.error(`No se encontró el carrusel con ID: ${carouselId}`);
        return;
    }

    const cards = carousel.querySelectorAll('.card');
    if (cards.length === 0) {
        console.error('No se encontraron cards en el carrusel');
        return;
    }

    let currentIndex = 0;
    let intervalId;
    const cardWidth = cards[0].offsetWidth + parseInt(window.getComputedStyle(cards[0]).marginRight);

    // Función para mover el carrusel
    const moveCarousel = () => {
        currentIndex = (currentIndex + 1) % cards.length;
        carousel.scrollTo({
            left: currentIndex * cardWidth,
            behavior: 'smooth'
        });
    };

    // Iniciar auto-scroll
    const startInterval = () => {
        intervalId = setInterval(moveCarousel, delay);
    };

    // Detectar cuando el usuario interactúa manualmente
    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;

    carousel.addEventListener('mousedown', (e) => {
        isDragging = true;
        startPos = e.clientX;
        currentTranslate = carousel.scrollLeft;
        clearInterval(intervalId);
    });

    carousel.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const x = e.clientX;
        const walk = (x - startPos) * 2; // Ajustar sensibilidad
        carousel.scrollLeft = currentTranslate - walk;
    });

    carousel.addEventListener('mouseup', () => {
        isDragging = false;
        setTimeout(startInterval, delay * 2);
    });

    carousel.addEventListener('mouseleave', () => {
        isDragging = false;
    });

    // Manejar eventos táctiles
    carousel.addEventListener('touchstart', (e) => {
        startPos = e.touches[0].clientX;
        currentTranslate = carousel.scrollLeft;
        clearInterval(intervalId);
    }, { passive: true });

    carousel.addEventListener('touchmove', (e) => {
        const x = e.touches[0].clientX;
        const walk = (x - startPos) * 2;
        carousel.scrollLeft = currentTranslate - walk;
    }, { passive: true });

    carousel.addEventListener('touchend', () => {
        setTimeout(startInterval, delay * 2);
    }, { passive: true });

    // Iniciar el carrusel
    startInterval();
}

// Configuración de galería automática mejorada
function setupAutoGallery(containerSelector = '.gallery-slider', delay = 8000) {
    const slider = document.querySelector(containerSelector);
    if (!slider) {
        console.error(`No se encontró el slider con selector: ${containerSelector}`);
        return;
    }

    const slides = slider.querySelectorAll('.gallery-slide');
    if (slides.length === 0) {
        console.error('No se encontraron slides en la galería');
        return;
    }

    let currentSlide = 0;
    let intervalId;

    // Mostrar slide actual
    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? '1' : '0';
            slide.classList.toggle('active', i === index);
        });
        currentSlide = index;
    };

    // Avanzar al siguiente slide
    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    };

    // Iniciar auto-slide
    const startInterval = () => {
        clearInterval(intervalId); // Limpiar intervalo previo
        intervalId = setInterval(nextSlide, delay);
    };

    // Manejar eventos táctiles
    let touchStartX = 0;
    let touchEndX = 0;

    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].clientX;
        clearInterval(intervalId);
    }, { passive: true });

    slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].clientX;
        handleSwipe();
        setTimeout(startInterval, delay * 2);
    }, { passive: true });

    const handleSwipe = () => {
        if (touchEndX < touchStartX - 50) {
            // Swipe izquierda (next)
            nextSlide();
        } else if (touchEndX > touchStartX + 50) {
            // Swipe derecha (prev)
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }
    };

    // Manejar eventos de ratón (para desktop)
    slider.addEventListener('mouseenter', () => {
        clearInterval(intervalId);
    });

    slider.addEventListener('mouseleave', () => {
        startInterval();
    });

    // Iniciar la galería
    showSlide(currentSlide);
    startInterval();
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
    // Esperar a que las imágenes se carguen para calcular correctamente los tamaños
    window.addEventListener('load', function() {
        setupAutoCarousel('carousel');
        setupAutoGallery();
    });
    setupFAQ();
});