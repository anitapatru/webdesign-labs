let currentIndex = 0;

function adjustSliderToImage() {
    const slider = document.querySelector('.slider');
    const currentImage = document.querySelectorAll('.slides img')[currentIndex];
    slider.style.width = `${currentImage.naturalWidth}px`;
    slider.style.height = `${currentImage.naturalHeight}px`;
}

function showSlide(index) {
    const slides = document.querySelectorAll('.slides img');
    const totalSlides = slides.length;

    if (index >= totalSlides) currentIndex = 0;
    if (index < 0) currentIndex = totalSlides - 1;

    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(${-currentIndex * 100}%)`;

    adjustSliderToImage();
}

function nextSlide() {
    currentIndex++;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex--;
    showSlide(currentIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
    window.addEventListener('resize', adjustSliderToImage);
});
