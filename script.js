const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const details = document.querySelectorAll('.faq-list details');

details.forEach((item) => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    details.forEach((other) => {
      if (other !== item) {
        other.removeAttribute('open');
      }
    });
  });
});
