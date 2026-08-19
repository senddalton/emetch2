// Cerrar Verificación de Edad
function closeAgeGate() {
    const gate = document.getElementById('age-gate');
    gate.style.opacity = '0';
    setTimeout(() => { 
        gate.style.display = 'none'; 
    }, 500);
}

// Navbar Sticky al hacer Scroll
window.addEventListener('scroll', () => {
    const header = document.getElementById('navbar');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Animación "Reveal" al hacer scroll (Intersection Observer)
document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');
    const revealOptions = { 
        threshold: 0.15 
    };
    
    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        });
    }, revealOptions);

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });
});
