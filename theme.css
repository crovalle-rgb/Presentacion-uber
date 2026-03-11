/* ============================================================
   SHARED BASE CSS — uber-pitch system
   All theme.css files override these :root variables
   ============================================================ */

@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&family=Bebas+Neue&family=IBM+Plex+Mono:wght@400;500&display=swap');

/* ── DESIGN TOKENS ───────────────────────────────────────── */
:root {
  /* Colors */
  --bg-base:        #090909;
  --bg-surface:     #111111;
  --bg-elevated:    #1a1a1a;
  --bg-card:        #141414;

  --accent:         #06C167;
  --accent-dim:     rgba(6, 193, 103, 0.12);
  --accent-glow:    rgba(6, 193, 103, 0.35);

  --text-primary:   #F5F5F0;
  --text-secondary: #888880;
  --text-muted:     #444440;
  --text-accent:    #06C167;

  --border:         rgba(255,255,255,0.07);
  --border-accent:  rgba(6, 193, 103, 0.4);

  --danger:         #FF4D4D;
  --warning:        #F5A623;
  --info:           #4DA6FF;

  /* Typography */
  --font-display:   'Bebas Neue', sans-serif;
  --font-heading:   'Syne', sans-serif;
  --font-body:      'DM Sans', sans-serif;
  --font-mono:      'IBM Plex Mono', monospace;

  /* Spacing scale */
  --space-xs:  0.25rem;
  --space-sm:  0.5rem;
  --space-md:  1rem;
  --space-lg:  2rem;
  --space-xl:  4rem;
  --space-2xl: 8rem;

  /* Layout */
  --max-w:     1200px;
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-xl: 32px;

  /* Transitions */
  --ease-out:  cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in:   cubic-bezier(0.7, 0, 0.84, 0);
  --t-fast:    0.15s;
  --t-base:    0.3s;
  --t-slow:    0.6s;
}

/* ── RESET ───────────────────────────────────────────────── */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
  font-weight: 400;
  line-height: 1.6;
  overflow-x: hidden;
}

img, video { display: block; max-width: 100%; }
a { color: inherit; text-decoration: none; }
button { cursor: pointer; border: none; background: none; font: inherit; }
ul, ol { list-style: none; }

/* ── PROGRESS BAR ────────────────────────────────────────── */
#progress-bar {
  position: fixed;
  top: 0; left: 0;
  height: 2px;
  width: 0%;
  background: var(--accent);
  z-index: 9999;
  box-shadow: 0 0 8px var(--accent-glow);
  transition: width 0.1s linear;
}

/* ── NAV ─────────────────────────────────────────────────── */
.site-nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  padding: 1.25rem var(--space-lg);
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background var(--t-base), backdrop-filter var(--t-base);
}

.site-nav.scrolled {
  background: rgba(9,9,9,0.85);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
}

.nav-brand {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.05em;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-brand span {
  color: var(--accent);
}

.nav-dots {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.nav-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--text-muted);
  transition: background var(--t-base), transform var(--t-base);
  cursor: pointer;
}

.nav-dot.active {
  background: var(--accent);
  transform: scale(1.4);
}

/* ── SECTION BASE ────────────────────────────────────────── */
.section {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: var(--space-2xl) var(--space-lg);
  position: relative;
  overflow: hidden;
}

.section--pinned {
  height: 100vh;
  overflow: hidden;
}

.container {
  max-width: var(--max-w);
  margin: 0 auto;
  width: 100%;
}

/* ── TYPOGRAPHY ──────────────────────────────────────────── */
.display {
  font-family: var(--font-display);
  line-height: 0.9;
  letter-spacing: 0.02em;
}

.heading {
  font-family: var(--font-heading);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.label {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-secondary);
}

.label--accent {
  color: var(--accent);
}

/* ── KPI CARDS ───────────────────────────────────────────── */
.kpi-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.kpi-card {
  background: var(--bg-card);
  padding: var(--space-lg) var(--space-lg);
  position: relative;
  transition: background var(--t-base);
}

.kpi-card:hover {
  background: var(--bg-elevated);
}

.kpi-card__label {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 0.75rem;
}

.kpi-card__value {
  font-family: var(--font-display);
  font-size: 3rem;
  line-height: 1;
  color: var(--text-primary);
}

.kpi-card__value--accent {
  color: var(--accent);
}

.kpi-card__sub {
  font-size: 0.8rem;
  color: var(--text-secondary);
  margin-top: 0.5rem;
}

.kpi-card__badge {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-family: var(--font-mono);
  font-size: 0.65rem;
  padding: 0.2rem 0.5rem;
  border-radius: 100px;
  margin-top: 0.75rem;
}

.kpi-card__badge--danger {
  background: rgba(255, 77, 77, 0.12);
  color: var(--danger);
  border: 1px solid rgba(255, 77, 77, 0.3);
}

.kpi-card__badge--success {
  background: var(--accent-dim);
  color: var(--accent);
  border: 1px solid var(--border-accent);
}

/* ── METRIC COMPARE ──────────────────────────────────────── */
.metric-compare {
  display: grid;
  grid-template-columns: 1fr 1px 1fr;
  gap: 0;
  background: var(--border);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.metric-compare__col {
  background: var(--bg-card);
  padding: var(--space-lg) var(--space-xl);
}

.metric-compare__divider {
  background: var(--border);
}

.metric-compare__col-label {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: var(--space-lg);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.metric-compare__col-label::before {
  content: '';
  display: block;
  width: 6px; height: 6px;
  border-radius: 50%;
  background: currentColor;
}

.metric-compare__col--highlight .metric-compare__col-label {
  color: var(--accent);
}

.metric-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--border);
}

.metric-row:last-child { border-bottom: none; }

.metric-row__name {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-secondary);
}

.metric-row__value {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.4rem;
  color: var(--text-primary);
}

.metric-row__value--up {
  color: var(--accent);
}

.metric-row__value--down {
  color: var(--warning);
}

/* ── CARDS ───────────────────────────────────────────────── */
.card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  transition: border-color var(--t-base), transform var(--t-base), box-shadow var(--t-base);
}

.card:hover {
  border-color: var(--border-accent);
  transform: translateY(-4px);
  box-shadow: 0 20px 60px rgba(0,0,0,0.4), 0 0 20px var(--accent-dim);
}

.card__icon {
  width: 44px; height: 44px;
  border-radius: var(--radius-sm);
  background: var(--accent-dim);
  border: 1px solid var(--border-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  margin-bottom: var(--space-md);
}

.card__title {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.card__body {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.65;
}

/* ── SECTION HEADER ──────────────────────────────────────── */
.section-header {
  margin-bottom: var(--space-xl);
}

.section-header .label {
  margin-bottom: var(--space-sm);
  display: block;
}

.section-header h2 {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: clamp(2rem, 5vw, 3.5rem);
  letter-spacing: -0.03em;
  line-height: 1.05;
  color: var(--text-primary);
}

.section-header p {
  margin-top: 1rem;
  font-size: 1.05rem;
  color: var(--text-secondary);
  max-width: 560px;
  line-height: 1.7;
}

/* ── PHONE MOCKUP ────────────────────────────────────────── */
.phone {
  width: 200px;
  height: 400px;
  background: #1a1a1a;
  border-radius: 32px;
  border: 2px solid #2a2a2a;
  position: relative;
  overflow: hidden;
  box-shadow:
    0 0 0 1px rgba(255,255,255,0.04) inset,
    0 40px 80px rgba(0,0,0,0.6);
}

.phone::before {
  content: '';
  position: absolute;
  top: 10px; left: 50%;
  transform: translateX(-50%);
  width: 60px; height: 6px;
  background: #0a0a0a;
  border-radius: 100px;
  z-index: 10;
}

.phone__screen {
  position: absolute;
  inset: 0;
  border-radius: 30px;
  overflow: hidden;
}

.phone__screen video,
.phone__screen img {
  width: 100%; height: 100%;
  object-fit: cover;
}

/* ── LAPTOP MOCKUP ───────────────────────────────────────── */
.laptop {
  position: relative;
  width: 400px;
}

.laptop__screen {
  background: #111;
  border-radius: 8px 8px 0 0;
  border: 2px solid #2a2a2a;
  border-bottom: none;
  aspect-ratio: 16/10;
  overflow: hidden;
  position: relative;
  box-shadow: 0 20px 60px rgba(0,0,0,0.5);
}

.laptop__base {
  background: #1e1e1e;
  height: 14px;
  border-radius: 0 0 4px 4px;
  border: 1px solid #2a2a2a;
}

.laptop__notch {
  position: absolute;
  bottom: 0; left: 50%;
  transform: translateX(-50%);
  width: 60px; height: 6px;
  background: #111;
  border-radius: 4px 4px 0 0;
}

/* ── PILL / TAG ──────────────────────────────────────────── */
.pill {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.3rem 0.8rem;
  border-radius: 100px;
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border: 1px solid var(--border);
  color: var(--text-secondary);
}

.pill--accent {
  background: var(--accent-dim);
  border-color: var(--border-accent);
  color: var(--accent);
}

/* ── DIVIDER ─────────────────────────────────────────────── */
.divider {
  height: 1px;
  background: var(--border);
  margin: var(--space-xl) 0;
}

/* ── ANIMATED FADE ───────────────────────────────────────── */
.fade-up {
  opacity: 0;
  transform: translateY(40px);
}

/* ── RESPONSIVE ──────────────────────────────────────────── */
@media (max-width: 768px) {
  .section {
    padding: var(--space-xl) var(--space-md);
  }

  .kpi-grid {
    grid-template-columns: 1fr 1fr;
  }

  .metric-compare {
    grid-template-columns: 1fr;
  }

  .metric-compare__divider { display: none; }

  .laptop { width: 100%; }
  .phone { width: 150px; height: 300px; }
}
