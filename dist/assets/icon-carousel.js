const carousel = document.querySelector('[data-icon-carousel]');
const slides = Array.from(carousel.querySelectorAll('[data-icon-slide]'));
const controls = carousel.querySelector('.icon-controls');
const picks = Array.from(controls.querySelectorAll('[data-icon-pick]'));
const toggle = controls.querySelector('[data-icon-toggle]');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let active = 0;
let rotating = !reducedMotion.matches;
let timer;

function show(index) {
  slides[active].hidden = true;
  picks[active].removeAttribute('aria-current');
  active = index;
  slides[active].hidden = false;
  picks[active].setAttribute('aria-current', 'true');
}

function scheduleRotation(startExplicitly = false) {
  clearInterval(timer);
  toggle.textContent = rotating ? toggle.dataset.pause : toggle.dataset.play;
  if (rotating && !document.hidden && (startExplicitly || !carousel.matches(':hover, :focus-within'))) {
    timer = setInterval(() => show((active + 1) % slides.length), 4400);
  }
}

for (const pick of picks) {
  pick.addEventListener('click', () => {
    show(Number(pick.dataset.iconPick));
    rotating = false;
    scheduleRotation();
  });
}

toggle.addEventListener('click', () => {
  rotating = !rotating;
  scheduleRotation(rotating);
});

for (const event of ['pointerenter', 'pointerleave', 'focusin', 'focusout']) {
  carousel.addEventListener(event, () => queueMicrotask(scheduleRotation));
}
document.addEventListener('visibilitychange', () => scheduleRotation());
reducedMotion.addEventListener('change', ({ matches }) => {
  rotating = !matches;
  scheduleRotation();
});

controls.hidden = false;
scheduleRotation();
