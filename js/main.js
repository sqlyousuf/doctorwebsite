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

/* ---------- Appointment request modal ----------
   Opens on a timer, not on load: a popup in someone's face before they have
   read anything is the fastest way to lose them. Once dismissed or submitted
   it stays away for a week. */
const apptOverlay = document.getElementById('apptOverlay');
if (apptOverlay) {
  const KEY = 'hswl-appt-dismissed';
  const WEEK = 7 * 24 * 60 * 60 * 1000;
  const DELAY = 25000;

  const form = document.getElementById('apptForm');
  const errorBox = document.getElementById('apptError');
  let lastFocused = null;

  // localStorage throws in some privacy modes; a popup is not worth an error.
  const suppressed = () => {
    try {
      const at = Number(localStorage.getItem(KEY));
      return at && Date.now() - at < WEEK;
    } catch (e) {
      return false;
    }
  };
  const suppress = () => {
    try {
      localStorage.setItem(KEY, String(Date.now()));
    } catch (e) {
      /* nothing to do — it just reopens next visit */
    }
  };

  const focusable = () =>
    [...apptOverlay.querySelectorAll('a[href], button, input, [tabindex]:not([tabindex="-1"])')].filter(
      (el) => !el.disabled && el.offsetParent !== null
    );

  const closeAppt = () => {
    apptOverlay.classList.remove('is-open');
    const done = () => {
      apptOverlay.hidden = true;
      document.body.style.overflow = '';
      if (lastFocused) lastFocused.focus();
    };
    // Wait for the fade unless the visitor has asked for less motion.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) done();
    else setTimeout(done, 250);
    suppress();
  };

  const openAppt = () => {
    if (!apptOverlay.hidden) return;
    lastFocused = document.activeElement;
    apptOverlay.hidden = false;
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => apptOverlay.classList.add('is-open'));
    const first = apptOverlay.querySelector('#apptFirst');
    if (first) first.focus();
  };

  document.getElementById('apptClose').addEventListener('click', closeAppt);
  apptOverlay.addEventListener('click', (e) => {
    if (e.target === apptOverlay) closeAppt();
  });
  document.addEventListener('keydown', (e) => {
    if (apptOverlay.hidden) return;
    if (e.key === 'Escape') closeAppt();
    if (e.key === 'Tab') {
      // Keep tabbing inside the dialog while it is open.
      const items = focusable();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const get = (k) => String(data.get(k) || '').trim();

    const required = [
      ['apptFirst', get('firstName'), 'first name'],
      ['apptLast', get('lastName'), 'last name'],
      ['apptEmail', get('email'), 'email'],
      ['apptPhone', get('phone'), 'phone number'],
    ];
    const missing = required.filter(([, v]) => !v);
    const badEmail = get('email') && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(get('email'));

    required.forEach(([id, v]) => document.getElementById(id).setAttribute('aria-invalid', String(!v)));
    if (badEmail) document.getElementById('apptEmail').setAttribute('aria-invalid', 'true');

    if (missing.length || badEmail) {
      errorBox.hidden = false;
      errorBox.textContent = missing.length
        ? `Please add your ${missing.map(([, , label]) => label).join(', ')}.`
        : 'Please check your email address.';
      (document.getElementById(missing.length ? missing[0][0] : 'apptEmail')).focus();
      return;
    }
    errorBox.hidden = true;

    // No form backend on this static site, so hand off to the visitor's mail
    // client with everything already filled in. Replace this with a real
    // endpoint when the practice has one.
    const body = [
      `Visit type: ${get('visitType')}`,
      `Patient: ${get('patientType')}`,
      `Name: ${get('firstName')} ${get('lastName')}`,
      `Email: ${get('email')}`,
      `Phone: ${get('phone')}`,
      `Date of birth: ${get('dob') || '(not given)'}`,
    ].join('\n');
    window.location.href =
      'mailto:info@houstonsurgicalweightloss.com' +
      '?subject=' + encodeURIComponent('Appointment Request — ' + get('firstName') + ' ' + get('lastName')) +
      '&body=' + encodeURIComponent(body);

    form.innerHTML =
      '<div class="appt-done">' +
      '<svg aria-hidden="true"><use href="#ic-check"/></svg>' +
      '<h3>Thank you</h3>' +
      '<p>Your email app should open with your request ready to send. If it does not, call us on ' +
      '<a href="tel:+12816536544">281-653-6544</a> and we will book you in.</p>' +
      '</div>';
    suppress();
  });

  // Anything marked data-appt-open opens the dialog on demand. A deliberate
  // click ignores the once-a-week suppression — that only governs the timer.
  document.querySelectorAll('[data-appt-open]').forEach((el) =>
    el.addEventListener('click', (e) => {
      e.preventDefault();
      openAppt();
    })
  );

  if (!suppressed()) setTimeout(openAppt, DELAY);
}
