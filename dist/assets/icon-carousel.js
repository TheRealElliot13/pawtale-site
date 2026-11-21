const carousel = document.querySelector('[data-icon-carousel]');
const slides = Array.from(carousel.querySelectorAll('[data-icon-slide]'));
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let active = 0;
let timer;

function scheduleRotation() {
  clearInterval(timer);
  if (!reducedMotion.matches && !document.hidden && !carousel.matches(':hover')) {
    timer = setInterval(() => {
      slides[active].hidden = true;
      active = (active + 1) % slides.length;
      slides[active].hidden = false;
    }, 4400);
  }
}

carousel.addEventListener('pointerenter', scheduleRotation);
carousel.addEventListener('pointerleave', scheduleRotation);
document.addEventListener('visibilitychange', scheduleRotation);
reducedMotion.addEventListener('change', scheduleRotation);
scheduleRotation();
