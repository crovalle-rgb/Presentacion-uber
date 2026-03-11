/* ============================================================
   SHARED CORE JS — uber-pitch system
   Animated counters, progress bar, video autoplay, nav scroll
   ============================================================ */

/* ── PROGRESS BAR ─────────────────────────────────────────── */
function initProgressBar() {
  const bar = document.getElementById('progress-bar');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = pct + '%';
  }, { passive: true });
}

/* ── NAV SCROLL STATE ─────────────────────────────────────── */
function initNav() {
  const nav = document.querySelector('.site-nav');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

/* ── ANIMATED COUNTER ─────────────────────────────────────── */
// Requires GSAP loaded globally
function animateCounter(el, from, to, duration = 1.8, prefix = '', suffix = '', decimals = 0) {
  if (typeof gsap === 'undefined') return;

  const obj = { val: from };
  gsap.to(obj, {
    val: to,
    duration,
    ease: 'power2.out',
    snap: decimals === 0 ? { val: 1 } : {},
    onUpdate: () => {
      const formatted = decimals > 0
        ? obj.val.toFixed(decimals)
        : Math.round(obj.val).toLocaleString('es-CL');
      el.textContent = prefix + formatted + suffix;
    }
  });
}

/* ── VIDEO AUTOPLAY ON VIEWPORT ──────────────────────────── */
function initVideoAutoplay() {
  const videos = document.querySelectorAll('.phone__screen video, .autoplay-video');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const video = entry.target;
      if (entry.isIntersecting) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, { threshold: 0.4 });

  videos.forEach(v => {
    v.muted = true;
    v.loop = true;
    v.playsInline = true;
    observer.observe(v);
  });
}

/* ── VIDEO HOVER (CARDS) ─────────────────────────────────── */
function initCardVideoHover() {
  document.querySelectorAll('.card--video').forEach(card => {
    const video = card.querySelector('video');
    if (!video) return;
    card.addEventListener('mouseenter', () => video.play().catch(() => {}));
    card.addEventListener('mouseleave', () => video.pause());
  });
}

/* ── NAV DOTS ACTIVE STATE ───────────────────────────────── */
function initNavDots() {
  const dots = document.querySelectorAll('.nav-dot');
  const sections = document.querySelectorAll('.section[id]');
  if (!dots.length || !sections.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        dots.forEach(d => {
          d.classList.toggle('active', d.dataset.section === id);
        });
      }
    });
  }, { threshold: 0.5 });

  sections.forEach(s => observer.observe(s));

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const target = document.getElementById(dot.dataset.section);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

/* ── CHART.JS — GROWTH LINE ──────────────────────────────── */
function initGrowthChart(canvasId, labels, datasets) {
  if (typeof Chart === 'undefined') return;
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;

  const defaults = {
    tension: 0.4,
    borderWidth: 2,
    pointRadius: 4,
    pointHoverRadius: 7,
    fill: true,
  };

  return new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: datasets.map(d => ({ ...defaults, ...d }))
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 1200, easing: 'easeInOutQuart' },
      plugins: {
        legend: {
          labels: {
            color: '#888880',
            font: { family: 'IBM Plex Mono', size: 10 },
            boxWidth: 12,
            usePointStyle: true,
          }
        },
        tooltip: {
          backgroundColor: '#1a1a1a',
          borderColor: 'rgba(255,255,255,0.08)',
          borderWidth: 1,
          titleColor: '#F5F5F0',
          bodyColor: '#888880',
          titleFont: { family: 'Syne', weight: '700' },
          bodyFont: { family: 'IBM Plex Mono', size: 11 },
          padding: 12,
          cornerRadius: 8,
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(255,255,255,0.04)' },
          ticks: {
            color: '#444440',
            font: { family: 'IBM Plex Mono', size: 10 }
          }
        },
        y: {
          grid: { color: 'rgba(255,255,255,0.04)' },
          ticks: {
            color: '#444440',
            font: { family: 'IBM Plex Mono', size: 10 }
          }
        }
      }
    }
  });
}

/* ── CHART.JS — BUBBLE MATRIX ────────────────────────────── */
function initBubbleChart(canvasId, data) {
  if (typeof Chart === 'undefined') return;
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;

  return new Chart(ctx, {
    type: 'bubble',
    data: { datasets: data },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 1000, easing: 'easeOutQuart' },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#1a1a1a',
          borderColor: 'rgba(255,255,255,0.08)',
          borderWidth: 1,
          titleColor: '#F5F5F0',
          bodyColor: '#888880',
          titleFont: { family: 'Syne', weight: '700', size: 13 },
          bodyFont: { family: 'IBM Plex Mono', size: 11 },
          padding: 12,
          cornerRadius: 8,
          callbacks: {
            label: ctx => {
              const d = ctx.raw;
              return [
                `Conv: ${d.x.toFixed(1)}%`,
                `Ads Int: ${d.y.toFixed(2)}%`,
                `Trips share: ${d.r}%`
              ];
            }
          }
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Conversión (Requests / Sessions) %',
            color: '#444440',
            font: { family: 'IBM Plex Mono', size: 10 }
          },
          grid: { color: 'rgba(255,255,255,0.04)' },
          ticks: { color: '#444440', font: { family: 'IBM Plex Mono', size: 9 } }
        },
        y: {
          title: {
            display: true,
            text: 'Ads Intensity (Ads / GB) %',
            color: '#444440',
            font: { family: 'IBM Plex Mono', size: 10 }
          },
          grid: { color: 'rgba(255,255,255,0.04)' },
          ticks: { color: '#444440', font: { family: 'IBM Plex Mono', size: 9 } }
        }
      }
    }
  });
}

/* ── INIT ALL ─────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initProgressBar();
  initNav();
  initVideoAutoplay();
  initCardVideoHover();
  initNavDots();
});
