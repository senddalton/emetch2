// Carrusel sin botones
function setupCarousel(carouselId, autoScrollDelay = 8000) {
    const carousel = document.getElementById(carouselId);
    if (!carousel) return;

    const cards = carousel.querySelectorAll('.card');
    if (cards.length === 0) return;

    let currentIndex = 0;
    let scrollInterval;
    const cardStyle = window.getComputedStyle(cards[0]);
    const cardWidth = cards[0].offsetWidth + parseInt(cardStyle.marginRight);

    const moveCarousel = (index) => {
        currentIndex = index;
        carousel.scrollTo({
            left: index * cardWidth,
            behavior: 'smooth'
        });
    };

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % cards.length;
        moveCarousel(currentIndex);
    };

    carousel.addEventListener('mouseenter', () => clearInterval(scrollInterval));
    carousel.addEventListener('mouseleave', () => scrollInterval = setInterval(nextSlide, autoScrollDelay));
    carousel.addEventListener('touchstart', () => clearInterval(scrollInterval), { passive: true });
    carousel.addEventListener('touchend', () => scrollInterval = setInterval(nextSlide, autoScrollDelay), { passive: true });

    scrollInterval = setInterval(nextSlide, autoScrollDelay);

    window.addEventListener('resize', () => moveCarousel(currentIndex));
}

// Galería sin botones
function setupGallerySlider(containerSelector = '.gallery-slider') {
    const slider = document.querySelector(containerSelector);
    if (!slider) return;

    const slides = slider.querySelectorAll('.gallery-slide');
    if (slides.length === 0) return;

    let currentSlide = 0;
    let slideInterval;

    const showSlide = (index) => {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
        currentSlide = index;
    };

    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    };

    slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
    slider.addEventListener('mouseleave', () => slideInterval = setInterval(nextSlide, 8000));

    showSlide(currentSlide);
    slideInterval = setInterval(nextSlide, 8000);
}

// Animaciones con AOS
function setupScrollAnimations() {
    const sections = document.querySelectorAll('section:not(.opiniones-producto), .prices, .gallery-section, .buttons');
    const divs = document.querySelectorAll('div');

    sections.forEach((section, i) => {
        const effect = i % 2 === 0 ? 'flip-left' : 'flip-right';
        section.setAttribute('data-aos', effect);
    });

    divs.forEach((div, i) => {
        const effects = ['fade-up', 'zoom-in', 'fade-down', 'zoom-out'];
        div.setAttribute('data-aos', effects[i % effects.length]);
    });

    AOS.init({
        duration: 1000,
        once: true,
    });
}

// FAQ
function setupFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length === 0) return;

    faqItems.forEach(item => {
        const pregunta = item.querySelector('.faq-pregunta');
        const toggle = pregunta?.querySelector('.faq-toggle');

        pregunta?.addEventListener('click', () => {
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    const otherToggle = otherItem.querySelector('.faq-toggle');
                    if (otherToggle) otherToggle.textContent = '+';
                }
            });

            item.classList.toggle('active');
            if (toggle) toggle.textContent = item.classList.contains('active') ? '−' : '+';
        });
    });
}

// Iniciar todo al cargar el DOM
document.addEventListener('DOMContentLoaded', function () {
    setupCarousel('carousel');
    setupGallerySlider();
    setupScrollAnimations();
    setupFAQ();

    // Mover botón de contacto a sección de precios
    const contactBtn = document.createElement('button');
    contactBtn.textContent = 'Contáctanos por WhatsApp';
    contactBtn.className = 'whatsapp-button';
    contactBtn.addEventListener('click', () => {
        window.open('https://wa.me/+5216183274838?text=Hola,%20me%20gustaría%20contactarlos', '_blank');
    });

    const pricesSection = document.querySelector('.prices');
    if (pricesSection) pricesSection.appendChild(contactBtn);
});
