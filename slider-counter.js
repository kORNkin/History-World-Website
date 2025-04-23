const images = [
    "img/index/index-slider/index-china.png",
    "img/index/index-slider/index-egypt.png",
    "img/index/index-slider/index-greek.png",
    "img/index/index-slider/index-india.png",
    "img/index/index-slider/index-meso.png",
    "img/index/index-slider/index-roman.png"
];

const hero = document.querySelector('.hero');
const counter = document.querySelector('.slider-counter');
const dots = document.querySelectorAll('.dot');

let currentSlide = 0;

function updateSlide(index) {
    currentSlide = index;
    hero.style.backgroundImage = `url('${images[currentSlide]}')`;
    counter.innerHTML = `0${currentSlide + 1} <span>/ 06</span>`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
}

document.querySelector('.arrow.left').addEventListener('click', () => {
    let newIndex = currentSlide - 1;
    if (newIndex < 0) newIndex = images.length - 1;
    updateSlide(newIndex);
});

document.querySelector('.arrow.right').addEventListener('click', () => {
    let newIndex = (currentSlide + 1) % images.length;
    updateSlide(newIndex);
});

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const index = parseInt(dot.dataset.index);
        updateSlide(index);
    });
});

// เริ่มต้นแสดงสไลด์แรก
updateSlide(0);
