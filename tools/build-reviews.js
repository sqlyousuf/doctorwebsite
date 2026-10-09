#!/usr/bin/env node
/*
 * Writes the patient reviews into the home page's scrolling strip.
 *
 *     node tools/build-reviews.js
 *
 * index.html is otherwise hand-maintained, so this touches only what sits
 * inside the strip's track and leaves the rest of the file alone. Run it
 * before tools/build-es.js, which translates the card labels for the Spanish
 * home page (the reviews themselves stay in the language they were written in).
 *
 * The reviews live in tools/content/reviews.js, shared with the Real Results
 * page, so the two can never disagree.
 */

const fs = require('fs');
const path = require('path');
const { reviews } = require('./content/reviews.js');

const file = path.join(__dirname, '..', 'index.html');
const html = fs.readFileSync(file, 'utf8');

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const stars = '<svg><use href="#ic-star"/></svg>'.repeat(5);

const cards = reviews
  .map(
    (r) => `        <article class="testimonial-card">
          <h3>${esc(r.name)}</h3>
          <p class="t-sub">${esc(r.line)}</p>
          <blockquote>${esc(r.text.join(' '))}</blockquote>
          <div class="t-foot">
            <span class="stars">${stars}</span>
            <span>Google Review</span>
          </div>
        </article>`
  )
  .join('\n');

const open = '<div class="marquee-track">\n';
const start = html.indexOf(open, html.indexOf('<section class="testimonials'));
const end = html.indexOf('\n      </div>\n    </div>', start);
if (start < 0 || end < 0) throw new Error('build-reviews: could not find the review strip in index.html');

fs.writeFileSync(file, html.slice(0, start + open.length) + cards + html.slice(end), 'utf8');
console.log(`build-reviews: wrote ${reviews.length} reviews into index.html`);
