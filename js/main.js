const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Skip loading/playing the hero background video on narrow (phone) screens
// so we don't rely on mobile autoplay support and don't burn mobile data.
const heroVideo = document.getElementById('heroVideo');
if (heroVideo) {
  const isWideScreen = window.matchMedia('(min-width: 721px)').matches;
  if (isWideScreen) {
    heroVideo.setAttribute('preload', 'auto');
    heroVideo.load();
    heroVideo.play().catch(() => {});
  } else {
    heroVideo.remove();
  }
}
