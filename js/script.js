const arrowUp = document.querySelector('.arrow-up');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            arrowUp.style.opacity = '0';
        } else {
            arrowUp.style.opacity = '1';
        }
    });
}, {
    threshold: 0.1
});

const alvo = document.querySelector('#header');
observer.observe(alvo);