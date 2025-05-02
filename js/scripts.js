// Función para cambiar entre páginas
function toggleImageSize(img) {
    if (img.style.transform === 'scale(2.5)') {
        img.style.transform = 'scale(1)';
        img.style.zIndex = '1';
        document.body.style.overflow = 'auto';
    } else {
        img.style.transform = 'scale(2.5)';
        img.style.zIndex = '1000';
        img.style.position = 'relative';
        document.body.style.overflow = 'hidden';
    }
}

// Función para volver al inicio de la página
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Evento para el botón de scroll down
document.addEventListener('DOMContentLoaded', function() {
    const scrollDownBtn = document.querySelector('.scroll-down');
    if (scrollDownBtn) {
        scrollDownBtn.addEventListener('click', function() {
            window.scrollBy({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }
});
