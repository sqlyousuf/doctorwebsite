document.documentElement.classList.add('js');

const header = document.getElementById('siteHeader');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

const setHeaderState = () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
};
setHeaderState();
window.addEventListener('scroll', setHeaderState, { passive: true });

const closeNav = () => {
  navLinks.classList.remove('open');
  navToggle.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
};

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeNav));
document.addEventListener('keydown', (e) => e.key === 'Escape' && closeNav());
document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) closeNav();
});

// Reveal sections as they scroll into view.
const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px' });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('in-view'));
}

// Some mobile browsers only allow autoplay once the video is muted,
// inline, and explicitly kicked off after load (a plain autoplay
// attribute is sometimes ignored on first paint on iOS/Android).
const heroVideo = document.getElementById('heroVideo');
if (heroVideo) {
  heroVideo.muted = true;
  heroVideo.setAttribute('preload', 'auto');
  const tryPlay = () => heroVideo.play().catch(() => {});
  heroVideo.addEventListener('loadedmetadata', tryPlay);
  heroVideo.addEventListener('canplay', tryPlay);
  document.addEventListener('touchstart', tryPlay, { once: true, passive: true });
  heroVideo.load();
  tryPlay();
}
