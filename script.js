document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const cards = document.querySelectorAll('.carousel-card');
    let currentIndex = 1;

    function updateCarousel() {
        cards.forEach((card, index) => {
            card.classList.remove('active');
            if (index === currentIndex) {
                card.classList.add('active');
            }
        });
    }

    function nextCard() {
        currentIndex = (currentIndex + 1) % cards.length;
        updateCarousel();
    }

    setInterval(nextCard, 1500); // Muda de card a cada 3 segundos
    updateCarousel();
});
