document.documentElement.classList.add('js');

const navToggle = document.getElementById('navToggle');
const navWrap = navToggle && navToggle.parentElement.querySelector('.nav-wrap');
const navLinks = document.getElementById('navLinks');

// The Patient Center item is a submenu, not a destination, so closing the
// burger menu has to fold its accordion back up too.
const closeSubmenus = () => {
  if (!navLinks) return;
  navLinks.querySelectorAll('.has-sub.open').forEach((item) => {
    item.classList.remove('open');
    const toggle = item.querySelector('.sub-toggle');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
  });
};

const closeNav = () => {
  if (!navWrap) return;
  navWrap.classList.remove('open');
  navToggle.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
  closeSubmenus();
};

if (navToggle && navWrap) {
  navToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = navWrap.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
    if (!isOpen) closeSubmenus();
  });

  // Desktop opens the submenu on hover/focus via CSS; this handles the tap,
  // which is the only way in on a phone. The toggle itself goes nowhere.
  navLinks.querySelectorAll('.sub-toggle').forEach((toggle) => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const item = toggle.closest('.has-sub');
      const isOpen = item.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  });

  navLinks
    .querySelectorAll('a:not(.sub-toggle)')
    .forEach((link) => link.addEventListener('click', closeNav));
  document.addEventListener('keydown', (e) => e.key === 'Escape' && closeNav());
  document.addEventListener('click', (e) => {
    if (!navWrap.contains(e.target) && !navToggle.contains(e.target)) closeNav();
  });
}

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
  const tryPlay = () => heroVideo.play().catch(() => {});
  heroVideo.addEventListener('loadedmetadata', tryPlay);
  heroVideo.addEventListener('canplay', tryPlay);
  document.addEventListener('touchstart', tryPlay, { once: true, passive: true });
  heroVideo.load();
  tryPlay();

  // Stop decoding frames while the hero is off-screen — saves battery on phones.
  if ('IntersectionObserver' in window) {
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => (entry.isIntersecting ? tryPlay() : heroVideo.pause()));
    }, { threshold: 0.05 });
    videoObserver.observe(heroVideo);
  }
}
