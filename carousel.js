document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    let currentIndex = 0;
    let isTransitioning = false;
    const autoPlayDelay = 5000;

    // Initialize first slide
    slides[currentIndex].classList.add('active');

    function changeSlide(nextIndex) {
        if (isTransitioning) return;
        isTransitioning = true;

        // Remove active class from current slide
        slides[currentIndex].classList.remove('active');

        // Update current index
        currentIndex = nextIndex;

        // Add active class to new slide
        slides[currentIndex].classList.add('active');

        // Reset transition lock after animation completes
        setTimeout(() => {
            isTransitioning = false;
        }, 800); // Match this with CSS transition duration
    }

    function nextSlide() {
        const nextIndex = (currentIndex + 1) % slides.length;
        changeSlide(nextIndex);
    }

    function prevSlide() {
        const nextIndex = (currentIndex - 1 + slides.length) % slides.length;
        changeSlide(nextIndex);
    }

    // Touch events
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const difference = touchStartX - touchEndX;

        if (Math.abs(difference) > swipeThreshold) {
            if (difference > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    }

    // Auto-play functionality
    let autoPlayInterval;

    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, autoPlayDelay);
    }

    function resetAutoPlay() {
        clearInterval(autoPlayInterval);
        startAutoPlay();
    }

    // Start auto-play
    startAutoPlay();

    // Optional: Pause on hover
    const carousel = document.querySelector('.hero-carousel');
    carousel.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
    carousel.addEventListener('mouseleave', startAutoPlay);
}); 