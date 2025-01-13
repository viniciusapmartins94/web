// 1. Efeito de rolagem suave (smooth scroll)
document.querySelectorAll('.navbar-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 60,  // Compensa a altura da navbar fixa
            behavior: 'smooth'
        });
    });
});

// 2. Animação de fade-in ao rolar a página
const elementsToAnimate = document.querySelectorAll('.fade-in');
const animateOnScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;

    elementsToAnimate.forEach(element => {
        if (scrollPosition > element.offsetTop) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);

// Inicializa a animação quando a página for carregada
document.addEventListener('DOMContentLoaded', animateOnScroll);

