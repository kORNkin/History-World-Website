document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.testimonial-slider');
  const slides = document.querySelectorAll('.testimonial-slide');
  let currentIndex = 0;
  let touchStartX = 0;
  let touchEndX = 0;
  const slideInterval = 5000; // 5 seconds between slides (adjust as needed)
  let slideTimer;

  // Function to show current slide
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) {
        slide.classList.add('active');
      }
    });
    currentIndex = index;
  }

  // Auto-advance slides
  function startAutoSlide() {
    slideTimer = setInterval(() => {
      nextSlide();
    }, slideInterval);
  }

  function nextSlide() {
    let newIndex = (currentIndex + 1) % slides.length;
    showSlide(newIndex);
  }

  function prevSlide() {
    let newIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(newIndex);
  }

  // Touch/swipe handling
  slider.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    clearInterval(slideTimer); // Pause auto-advance during interaction
  });

  slider.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
    // Restart auto-advance after interaction
    startAutoSlide();
  });

  // Mouse drag handling (for desktop)
  slider.addEventListener('mousedown', (e) => {
    touchStartX = e.clientX;
    clearInterval(slideTimer); // Pause auto-advance during interaction
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  });

  function mouseMoveHandler(e) {
    // Prevent text selection during drag
    e.preventDefault();
  }

  function mouseUpHandler(e) {
    touchEndX = e.clientX;
    handleSwipe();
    // Restart auto-advance after interaction
    startAutoSlide();
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
  }

  function handleSwipe() {
    const threshold = 50; // Minimum swipe distance to trigger slide change
    const diff = touchStartX - touchEndX;

    if (diff > threshold) {
      // Swipe left - next slide
      nextSlide();
    } else if (diff < -threshold) {
      // Swipe right - previous slide
      prevSlide();
    }
  }

  // Initialize first slide and start auto-sliding
  showSlide(0);
  startAutoSlide();
});