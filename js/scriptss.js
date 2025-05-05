// Función mejorada para visualizar imágenes
function toggleImageSize(img) {
    // Crear o reutilizar el modal de imagen ampliada
    let enlargedMode = document.querySelector('.enlarged-mode');
    
    if (!enlargedMode) {
        enlargedMode = document.createElement('div');
        enlargedMode.className = 'enlarged-mode';
        
        const enlargedImage = document.createElement('img');
        enlargedImage.className = 'enlarged-image';
        
        const closeButton = document.createElement('span');
        closeButton.className = 'close-enlarged';
        closeButton.innerHTML = '&times;';
        closeButton.addEventListener('click', function() {
            enlargedMode.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
        
        enlargedMode.appendChild(enlargedImage);
        enlargedMode.appendChild(closeButton);
        document.body.appendChild(enlargedMode);
        
        // Cerrar al hacer clic fuera de la imagen
        enlargedMode.addEventListener('click', function(event) {
            if (event.target === enlargedMode) {
                enlargedMode.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // Obtener la imagen dentro del modal
    const enlargedImage = enlargedMode.querySelector('.enlarged-image');
    enlargedImage.src = img.src;
    
    // Activar el modal
    enlargedMode.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Función para volver al inicio de la página
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Alternar modo oscuro
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    // Guardar preferencia en localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Inicialización de todos los eventos
document.addEventListener('DOMContentLoaded', function() {
    // Botón de scroll down
    const scrollDownBtn = document.querySelector('.scroll-down');
    if (scrollDownBtn) {
        scrollDownBtn.addEventListener('click', function() {
            window.scrollBy({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }
    
    // Verificar tema guardado
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
    
    // Crear botón de tema oscuro
    const themeToggle = document.createElement('div');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = '☀️';
    themeToggle.addEventListener('click', function() {
        toggleDarkMode();
        this.innerHTML = document.body.classList.contains('dark-mode') ? '🌙' : '☀️';
    });
    document.body.appendChild(themeToggle);
    
    // Actualizar ícono según el tema actual
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.innerHTML = '🌙';
    }
    
    // Botón de volver arriba
    const backToTopBtn = document.createElement('div');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.addEventListener('click', scrollToTop);
    document.body.appendChild(backToTopBtn);
    
    // Mostrar/ocultar botón de volver arriba
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    // Navbar toggle para móviles
    const navbarToggle = document.querySelector('.navbar-toggle');
    if (navbarToggle) {
        navbarToggle.addEventListener('click', function() {
            document.querySelector('.navbar-menu').classList.toggle('active');
        });
    }
    
    // Aplicar efecto de zoom a todas las imágenes de productos
    const productImages = document.querySelectorAll('.product img, .line img');
    productImages.forEach(img => {
        img.addEventListener('click', function() {
            toggleImageSize(this);
        });
    });
});
