// Efeito de revelação de elementos ao rolar
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('section, .feature-card').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
});

// Suavização do Header
window.addEventListener('scroll', () => {
    const nav = document.querySelector('#navbar');
    if (window.scrollY > 100) {
        nav.style.padding = '12px 8%';
        nav.style.background = 'rgba(0,0,0,0.98)';
    } else {
        nav.style.padding = '20px 8%';
        nav.style.background = 'rgba(5, 5, 5, 0.95)';
    }
});
