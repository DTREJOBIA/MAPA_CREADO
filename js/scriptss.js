function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
}

function showFullImage(imgSrc) {
    const overlay = document.getElementById('imageOverlay');
    const overlayImg = overlay.querySelector('img');
    overlayImg.src = imgSrc;
    overlay.style.display = 'flex';
    overlay.addEventListener('click', closeFullImage);
}

function closeFullImage() {
    const overlay = document.getElementById('imageOverlay');
    overlay.style.display = 'none';
    overlay.removeEventListener('click', closeFullImage);
}


document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    const themeToggle = document.createElement('div');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = document.body.classList.contains('dark-mode') ? '🌙' : '☀️';
    themeToggle.addEventListener('click', function() {
        toggleDarkMode();
        this.innerHTML = document.body.classList.contains('dark-mode') ? '🌙' : '☀️';
    });
    document.body.appendChild(themeToggle);

    const backToTopBtn = document.createElement('div');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.addEventListener('click', scrollToTop);
    document.body.appendChild(backToTopBtn);

    window.addEventListener('scroll', function() {
        backToTopBtn.classList.toggle('show', window.pageYOffset > 300);
    });
});
