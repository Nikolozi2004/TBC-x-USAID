// Slider
// Can be swiped

const sliderContainer = document.getElementById('sliderContainer');
const sliderItems = document.querySelectorAll('.slider-item');
let currentIndex = 0;
let isManualChange = false;
let autoSliderInterval;
let touchStartX = 0;
let touchEndX = 0;

const showSlide = (index) => {
    sliderItems.forEach((item, i) => {
        const shouldDisplay = i === index;
        item.style.display = shouldDisplay ? 'block' : 'none';
        item.classList.toggle('fadeIn', shouldDisplay);
    });
};

const changeSlide = (direction) => {
    currentIndex = (currentIndex + direction + sliderItems.length) % sliderItems.length;
    showSlide(currentIndex);
};

const nextSlide = () => {
    changeSlide(1);
    resetAutoSliderTimeout();
};

const prevSlide = () => {
    changeSlide(-1);
    resetAutoSliderTimeout();
};

const goToSlide = (index) => {
    showSlide(currentIndex = index - 1);
    resetAutoSliderTimeout();
};

const resetAutoSliderTimeout = () => {
    if (isManualChange) {
        clearInterval(autoSliderInterval);
        isManualChange = false;


        autoSliderInterval = setInterval(nextSlide, 8000);
    }
};

autoSliderInterval = setInterval(nextSlide, 3850);

sliderContainer.addEventListener('click', () => {
    isManualChange = true;
});

sliderContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
});

sliderContainer.addEventListener('touchmove', (e) => {
    e.preventDefault();
});

sliderContainer.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
});

const handleSwipe = () => {
    const swipeThreshold = 50;
    if (touchStartX - touchEndX > swipeThreshold) {
        nextSlide();
    } else if (touchEndX - touchStartX > swipeThreshold) {
        prevSlide();
    }
};

