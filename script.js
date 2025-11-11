// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Set current year in footer
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// About: simple See more/less toggle
const moreToggle = document.getElementById('about-more-toggle');
const moreContent = document.getElementById('about-more');
if (moreToggle && moreContent) {
  moreToggle.addEventListener('click', (e) => {
    e.preventDefault();
    const isHidden = moreContent.classList.contains('hidden');
    moreContent.classList.toggle('hidden');
    moreToggle.textContent = isHidden ? 'See less' : 'See more';
  });
}

// Theme toggle with persistence (default dark)
const THEME_KEY = 'theme-preference';
const themeToggle = document.querySelector('[data-theme-toggle]');
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  if (themeToggle) {
    const label = themeToggle.querySelector('.label');
    const icon = themeToggle.querySelector('.icon');
    if (label && icon) {
      if (theme === 'light') {
        label.textContent = 'Light';
        icon.textContent = '☀️';
      } else {
        label.textContent = 'Dark';
        icon.textContent = '🌙';
      }
    }
  }
}
const savedTheme = localStorage.getItem(THEME_KEY);
applyTheme(savedTheme || 'dark');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem(THEME_KEY, next);
  });
}