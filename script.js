/* ============================================================
   TIRUPATI ENTERPRISES — MAIN JAVASCRIPT
   ============================================================ */

'use strict';

// ─── NAVBAR SCROLL EFFECT ──────────────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });

// ─── HAMBURGER MENU ────────────────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
  document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
});

// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ─── AOS (SCROLL ANIMATIONS) ───────────────────────────────────────────────
const aosEls = document.querySelectorAll('[data-aos]');

const aosObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = parseInt(entry.target.dataset.aosDelay || '0');
      setTimeout(() => {
        entry.target.classList.add('aos-animate');
      }, delay);
      aosObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

aosEls.forEach(el => aosObserver.observe(el));

// ─── BACK TO TOP ───────────────────────────────────────────────────────────
const backTop = document.getElementById('backTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backTop.classList.add('visible');
  } else {
    backTop.classList.remove('visible');
  }
}, { passive: true });

backTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ─── HERO VIDEO AUTOPLAY ───────────────────────────────────────────────────
const heroVideo = document.getElementById('heroVideo');
if (heroVideo) {
  heroVideo.play().catch(() => {
    // Autoplay blocked — show poster fallback gracefully
  });
}

// ─── GALLERY FILTER ────────────────────────────────────────────────────────
const filterBtns    = document.querySelectorAll('.filter-btn');
const galleryItems  = document.querySelectorAll('.gallery-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Active state
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    galleryItems.forEach(item => {
      if (filter === 'all' || item.classList.contains(filter)) {
        item.classList.remove('hidden');
        item.style.animation = 'fadeInItem 0.4s ease forwards';
      } else {
        item.classList.add('hidden');
      }
    });
  });
});

// Add CSS for fadeInItem
const fadeStyle = document.createElement('style');
fadeStyle.textContent = `
  @keyframes fadeInItem {
    from { opacity: 0; transform: scale(0.95); }
    to   { opacity: 1; transform: scale(1); }
  }
`;
document.head.appendChild(fadeStyle);

// ─── LOAD MORE GALLERY ─────────────────────────────────────────────────────
const loadMoreBtn = document.getElementById('loadMoreBtn');
const allGalleryPhotos = [
  // Named files
  "VDF Flooring After.jpeg",
  "VDF Flooring Before.jpeg",
  "VDF Finish Industrial Flooring.jpeg",
  "Warehouse Flooring.jpeg",
  "Stamp Concrete Flooring.jpeg",
  "WhatsApp Image 2026-05-24 at 12.56.50 PM (1).jpeg",
  // Numbered WhatsApp files not shown in initial grid
  "WhatsApp Image 2026-05-24 at 12.57.08 PM (1).jpeg",
  "WhatsApp Image 2026-05-24 at 12.57.08 PM (3).jpeg",
  "WhatsApp Image 2026-05-24 at 12.57.08 PM (5).jpeg",
  "WhatsApp Image 2026-05-24 at 12.57.08 PM (8).jpeg",
  "WhatsApp Image 2026-05-24 at 12.57.08 PM (10).jpeg",
  "WhatsApp Image 2026-05-24 at 12.57.08 PM (12).jpeg",
  "WhatsApp Image 2026-05-24 at 12.57.08 PM (14).jpeg",
  "WhatsApp Image 2026-05-24 at 12.57.08 PM (15).jpeg",
  "WhatsApp Image 2026-05-24 at 12.57.08 PM (17).jpeg",
  "WhatsApp Image 2026-05-24 at 12.57.08 PM (19).jpeg",
  "WhatsApp Image 2026-05-24 at 12.57.08 PM (21).jpeg",
  "WhatsApp Image 2026-05-24 at 12.57.08 PM (23).jpeg",
  "WhatsApp Image 2026-05-24 at 12.57.08 PM (25).jpeg",
  "WhatsApp Image 2026-05-24 at 12.57.08 PM (27).jpeg",
  "WhatsApp Image 2026-05-24 at 12.57.08 PM (28).jpeg",
  "WhatsApp Image 2026-05-24 at 12.57.08 PM (29).jpeg",
  "WhatsApp Image 2026-05-24 at 12.57.08 PM (30).jpeg",
  "WhatsApp Image 2026-05-24 at 12.57.08 PM (31).jpeg",
  "WhatsApp Image 2026-05-24 at 12.57.08 PM (32).jpeg",
  "WhatsApp Image 2026-05-24 at 12.57.08 PM (33).jpeg",
  "WhatsApp Image 2026-05-24 at 12.57.08 PM (34).jpeg",
  "WhatsApp Image 2026-05-24 at 12.57.08 PM (35).jpeg",
  "WhatsApp Image 2026-05-24 at 12.57.08 PM (36).jpeg",
  "WhatsApp Image 2026-05-24 at 12.57.08 PM (37).jpeg",
  "WhatsApp Image 2026-05-24 at 12.57.08 PM (38).jpeg",
  "WhatsApp Image 2026-05-24 at 12.57.08 PM (39).jpeg",
  "WhatsApp Image 2026-05-24 at 12.57.08 PM (40).jpeg",
  "WhatsApp Image 2026-05-24 at 12.57.08 PM (41).jpeg",
  "WhatsApp Image 2026-05-24 at 12.57.08 PM (42).jpeg",
  "WhatsApp Image 2026-05-24 at 12.57.08 PM (43).jpeg",
  "WhatsApp Image 2026-05-24 at 12.57.08 PM (44).jpeg",
  "WhatsApp Image 2026-05-24 at 12.57.08 PM (45).jpeg",
  "WhatsApp Image 2026-05-24 at 12.57.08 PM (46).jpeg",
  "WhatsApp Image 2026-05-24 at 12.57.08 PM (47).jpeg",
  "WhatsApp Image 2026-05-24 at 12.57.08 PM (48).jpeg",
  "WhatsApp Image 2026-05-24 at 12.57.08 PM (49).jpeg",
  "WhatsApp Image 2026-05-24 at 12.57.08 PM (50).jpeg",
  "WhatsApp Image 2026-05-24 at 12.57.08 PM (51).jpeg",
  "WhatsApp Image 2026-05-24 at 12.57.08 PM (52).jpeg",
  "WhatsApp Image 2026-05-24 at 12.57.08 PM (53).jpeg",
  "WhatsApp Image 2026-05-24 at 12.57.08 PM (54).jpeg",
];
let extraLoaded = false;

if (loadMoreBtn) {
  loadMoreBtn.addEventListener('click', () => {
    if (extraLoaded) {
      loadMoreBtn.style.display = 'none';
      return;
    }

    const grid = document.getElementById('galleryGrid');
    allGalleryPhotos.forEach((photo, i) => {
      const item = document.createElement('div');
      item.className = 'gallery-item photos';
      item.style.animation = `fadeInItem 0.4s ease ${i * 50}ms forwards`;
      item.style.opacity = '0';
      item.innerHTML = `
        <img src="assets/photos/${photo}" alt="Tirupati Enterprises Flooring Project" loading="lazy" />
        <div class="gallery-hover"><span>View</span></div>
      `;
      item.addEventListener('click', () => openLightbox(item));
      grid.appendChild(item);

      // Re-observe for AOS
      setTimeout(() => { item.style.opacity = '1'; }, i * 60);
    });

    extraLoaded = true;
    loadMoreBtn.textContent = 'All Projects Loaded ✓';
    loadMoreBtn.disabled = true;
    loadMoreBtn.style.opacity = '0.5';

    // Rebind lightbox events
    bindLightbox();
  });
}

// ─── LIGHTBOX ──────────────────────────────────────────────────────────────
const lightbox        = document.getElementById('lightbox');
const lightboxContent = document.getElementById('lightboxContent');
const lightboxClose   = document.getElementById('lightboxClose');
const lightboxPrev    = document.getElementById('lightboxPrev');
const lightboxNext    = document.getElementById('lightboxNext');

let lightboxItems = [];
let lightboxIndex = 0;

function openLightbox(itemEl) {
  // Collect all visible gallery items
  lightboxItems = Array.from(document.querySelectorAll('.gallery-item:not(.hidden)'));
  lightboxIndex = lightboxItems.indexOf(itemEl);
  showLightboxItem(lightboxIndex);
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function showLightboxItem(idx) {
  const item = lightboxItems[idx];
  if (!item) return;

  const img   = item.querySelector('img');
  const video = item.querySelector('video');

  lightboxContent.innerHTML = '';

  if (img) {
    const el = document.createElement('img');
    el.src = img.src;
    el.alt = img.alt;
    lightboxContent.appendChild(el);
  } else if (video) {
    const el = document.createElement('video');
    el.src = video.querySelector('source')?.src || video.src;
    el.controls = true;
    el.autoplay = true;
    el.style.maxWidth = '90vw';
    el.style.maxHeight = '85vh';
    el.style.borderRadius = '14px';
    lightboxContent.appendChild(el);
  }
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
  lightboxContent.innerHTML = '';
}

lightboxClose.addEventListener('click', closeLightbox);

lightboxPrev.addEventListener('click', () => {
  lightboxIndex = (lightboxIndex - 1 + lightboxItems.length) % lightboxItems.length;
  showLightboxItem(lightboxIndex);
});

lightboxNext.addEventListener('click', () => {
  lightboxIndex = (lightboxIndex + 1) % lightboxItems.length;
  showLightboxItem(lightboxIndex);
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('active')) return;
  if (e.key === 'ArrowLeft')  lightboxPrev.click();
  if (e.key === 'ArrowRight') lightboxNext.click();
  if (e.key === 'Escape')     closeLightbox();
});

function bindLightbox() {
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.removeEventListener('click', item._lightboxHandler);
    item._lightboxHandler = () => openLightbox(item);
    item.addEventListener('click', item._lightboxHandler);
  });
}

bindLightbox();

// ─── GALLERY VIDEO HOVER PLAY ─────────────────────────────────────────────
document.querySelectorAll('.gallery-item video').forEach(video => {
  const item = video.closest('.gallery-item');
  item.addEventListener('mouseenter', () => {
    video.play().catch(() => {});
  });
  item.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });
});

// ─── CONTACT FORM — WHATSAPP SUBMISSION ───────────────────────────────────
const contactForm = document.getElementById('contactForm');
const WA_NUMBER   = '919762681055';

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const errors = validateForm();
  if (errors > 0) return;

  const name        = document.getElementById('fullName').value.trim();
  const phone       = document.getElementById('phone').value.trim();
  const company     = document.getElementById('company').value.trim();
  const projectType = document.getElementById('projectType').value;
  const location    = document.getElementById('siteLocation').value.trim();
  const message     = document.getElementById('message').value.trim();

  // Compose WhatsApp message
  const lines = [
    '🏗️ *New Flooring Enquiry — Tirupati Enterprises*',
    '──────────────────────────',
    `👤 *Name:* ${name}`,
    `📱 *Phone:* ${phone}`,
    company ? `🏢 *Company:* ${company}` : null,
    `🔧 *Project Type:* ${projectType}`,
    `📍 *Site Location:* ${location}`,
    message ? `💬 *Message:* ${message}` : null,
    '──────────────────────────',
    '📅 Requesting: Free Site Visit & Quotation',
  ].filter(Boolean).join('\n');

  const encoded = encodeURIComponent(lines);
  const waUrl   = `https://wa.me/${WA_NUMBER}?text=${encoded}`;

  // Animate button
  const btn = document.getElementById('submitBtn');
  btn.textContent = '✓ Sending…';
  btn.disabled = true;

  setTimeout(() => {
    window.open(waUrl, '_blank');
    btn.disabled = false;
    btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> Send via WhatsApp`;
    contactForm.reset();
  }, 600);
});

function validateForm() {
  let errors = 0;

  const fields = [
    { id: 'fullName',    errId: 'fullNameError',    msg: 'Please enter your full name.',     check: v => v.length >= 2 },
    { id: 'phone',       errId: 'phoneError',        msg: 'Please enter a valid phone number.', check: v => /^[+\d\s\-()]{7,15}$/.test(v) },
    { id: 'projectType', errId: 'projectTypeError', msg: 'Please select a project type.',    check: v => v !== '' },
    { id: 'siteLocation',errId: 'siteLocationError',msg: 'Please enter the site location.', check: v => v.length >= 2 },
  ];

  fields.forEach(({ id, errId, msg, check }) => {
    const input = document.getElementById(id);
    const errEl = document.getElementById(errId);
    const val   = input.value.trim();

    if (!check(val)) {
      errEl.textContent = msg;
      input.classList.add('error');
      errors++;
    } else {
      errEl.textContent = '';
      input.classList.remove('error');
    }
  });

  return errors;
}

// Clear errors on input
contactForm.querySelectorAll('input, select, textarea').forEach(field => {
  field.addEventListener('input', () => {
    field.classList.remove('error');
    const errEl = document.getElementById(field.id + 'Error');
    if (errEl) errEl.textContent = '';
  });
});

// ─── SMOOTH NAVBAR ACTIVE LINK ────────────────────────────────────────────
const sections  = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => a.classList.remove('active-link'));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active-link');
    }
  });
}, { threshold: 0.4 });

sections.forEach(sec => sectionObserver.observe(sec));

// Active nav style
const activeLinkStyle = document.createElement('style');
activeLinkStyle.textContent = `.nav-links a.active-link { color: var(--blue-300) !important; }`;
document.head.appendChild(activeLinkStyle);

// ─── COUNTER ANIMATION ────────────────────────────────────────────────────
const counters = document.querySelectorAll('.stat-num');

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el     = entry.target;
    const target = parseInt(el.textContent.replace(/\D/g, ''));
    const suffix = el.textContent.replace(/[\d]/g, '');
    let count    = 0;
    const step   = target / 60;

    const timer = setInterval(() => {
      count += step;
      if (count >= target) {
        count = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(count) + suffix;
    }, 20);

    counterObserver.unobserve(el);
  });
}, { threshold: 0.5 });

counters.forEach(c => counterObserver.observe(c));

// ─── AREA CARD CLICK ──────────────────────────────────────────────────────
document.querySelectorAll('.area-card').forEach(card => {
  card.addEventListener('click', () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  });
});

// ─── INIT ──────────────────────────────────────────────────────────────────
console.log('✅ Tirupati Enterprises Website Loaded');
