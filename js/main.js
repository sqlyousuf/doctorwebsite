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
   Timing follows the usual convention for a lead-capture dialog:

     - first appearance 20s into a page, not on load
     - after a dismissal it re-arms 3 minutes later, and again on each new page
     - at most 3 appearances per session, so it never becomes harassment
     - once actually submitted it stays away for 30 days

   The counters live in sessionStorage, so a fresh visit starts over; only the
   submitted flag persists. All four numbers are data- attributes on the
   overlay so they can be tuned without touching this file. */
const apptOverlay = document.getElementById('apptOverlay');
if (apptOverlay) {
  const num = (name, fallback) => Number(apptOverlay.dataset[name]) || fallback;
  const DELAY = num('delay', 20) * 1000;
  const REARM = num('rearm', 180) * 1000;
  const MAX_PER_SESSION = num('max', 3);
  const SUBMITTED_MS = num('submittedDays', 30) * 24 * 60 * 60 * 1000;

  const SUBMITTED_KEY = 'hswl-appt-submitted';
  const SHOWN_KEY = 'hswl-appt-shown';

  const form = document.getElementById('apptForm');
  const errorBox = document.getElementById('apptError');
  let lastFocused = null;
  let timer = null;

  // Storage throws in some privacy modes, and a popup is not worth an error.
  const read = (store, key) => {
    try {
      return window[store].getItem(key);
    } catch (e) {
      return null;
    }
  };
  const write = (store, key, value) => {
    try {
      window[store].setItem(key, value);
    } catch (e) {
      /* nothing to do — the policy just resets */
    }
  };

  const hasSubmitted = () => {
    const at = Number(read('localStorage', SUBMITTED_KEY));
    return Boolean(at) && Date.now() - at < SUBMITTED_MS;
  };
  const shownCount = () => Number(read('sessionStorage', SHOWN_KEY)) || 0;
  const mayShow = () => !hasSubmitted() && shownCount() < MAX_PER_SESSION && apptOverlay.hidden;

  const focusable = () =>
    [...apptOverlay.querySelectorAll('a[href], button, input, [tabindex]:not([tabindex="-1"])')].filter(
      (el) => !el.disabled && el.offsetParent !== null
    );

  const openAppt = (byRequest) => {
    if (!apptOverlay.hidden) return;
    lastFocused = document.activeElement;
    apptOverlay.hidden = false;
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => apptOverlay.classList.add('is-open'));
    const first = apptOverlay.querySelector('#apptFirst');
    if (first) first.focus();
    // A deliberate click does not burn one of the automatic appearances.
    if (!byRequest) write('sessionStorage', SHOWN_KEY, String(shownCount() + 1));
  };

  const closeAppt = () => {
    apptOverlay.classList.remove('is-open');
    const done = () => {
      apptOverlay.hidden = true;
      document.body.style.overflow = '';
      if (lastFocused) lastFocused.focus();
    };
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) done();
    else setTimeout(done, 250);
    // Dismissing re-arms rather than silencing: try again later on this page,
    // up to the per-session cap.
    clearTimeout(timer);
    timer = setTimeout(() => {
      if (mayShow()) openAppt();
    }, REARM);
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
    const field = (k) => String(data.get(k) || '').trim();

    const required = [
      ['apptFirst', field('firstName'), 'first name'],
      ['apptLast', field('lastName'), 'last name'],
      ['apptEmail', field('email'), 'email'],
      ['apptPhone', field('phone'), 'phone number'],
    ];
    const missing = required.filter(([, v]) => !v);
    const badEmail = field('email') && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(field('email'));

    required.forEach(([id, v]) => document.getElementById(id).setAttribute('aria-invalid', String(!v)));
    if (badEmail) document.getElementById('apptEmail').setAttribute('aria-invalid', 'true');

    if (missing.length || badEmail) {
      errorBox.hidden = false;
      errorBox.textContent = missing.length
        ? 'Please add your ' + missing.map((m) => m[2]).join(', ') + '.'
        : 'Please check your email address.';
      document.getElementById(missing.length ? missing[0][0] : 'apptEmail').focus();
      return;
    }
    errorBox.hidden = true;

    // No form backend on this static site, so hand off to the visitor's mail
    // client with everything already filled in. Replace this with a real
    // endpoint when the practice has one.
    const body = [
      'Visit type: ' + field('visitType'),
      'Patient: ' + field('patientType'),
      'Name: ' + field('firstName') + ' ' + field('lastName'),
      'Email: ' + field('email'),
      'Phone: ' + field('phone'),
      'Date of birth: ' + (field('dob') || '(not given)'),
    ].join('\n');
    window.location.href =
      'mailto:info@houstonsurgicalweightloss.com' +
      '?subject=' +
      encodeURIComponent('Appointment Request — ' + field('firstName') + ' ' + field('lastName')) +
      '&body=' +
      encodeURIComponent(body);

    form.innerHTML =
      '<div class="appt-done">' +
      '<svg aria-hidden="true"><use href="#ic-check"/></svg>' +
      '<h3>Thank you</h3>' +
      '<p>Your email app should open with your request ready to send. If it does not, call us on ' +
      '<a href="tel:+12816536544">281-653-6544</a> and we will book you in.</p>' +
      '</div>';
    // Someone who has asked for an appointment should not be asked again.
    write('localStorage', SUBMITTED_KEY, String(Date.now()));
    clearTimeout(timer);
  });

  // Anything marked data-appt-open opens the dialog on demand, whatever the
  // automatic policy currently says.
  document.querySelectorAll('[data-appt-open]').forEach((el) =>
    el.addEventListener('click', (e) => {
      e.preventDefault();
      clearTimeout(timer);
      openAppt(true);
    })
  );

  if (mayShow()) {
    timer = setTimeout(() => {
      if (mayShow()) openAppt();
    }, DELAY);
  }
}
