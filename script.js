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

// Toggle 'See more' text on About collapsible
const aboutDetails = document.querySelector('.about-collapse');
if (aboutDetails) {
  const summary = aboutDetails.querySelector('summary');
  const updateLabel = () => {
    if (!summary) return;
    summary.textContent = aboutDetails.open ? 'See less' : 'See more';
  };
  aboutDetails.addEventListener('toggle', updateLabel);
}