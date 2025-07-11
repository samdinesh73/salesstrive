const container = document.querySelector('.scroll-container');
const data = { ease: 0.1, current: 0, previous: 0 };

function smoothScroll() {
  data.current = window.scrollY;
  data.previous += (data.current - data.previous) * data.ease;
  container.style.transform = `translateY(-${data.previous}px)`;
  requestAnimationFrame(smoothScroll);
}

// On load
document.body.style.height = `${container.getBoundingClientRect().height}px`;
requestAnimationFrame(smoothScroll);
