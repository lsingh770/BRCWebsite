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

const WHATSAPP_LINK = 'https://wa.me/919971586565?text=Hello%20Balvir%20Ji%2C%20I%20would%20like%20to%20book%20a%20consultation%20at%20Dr.%20BRC%20Clinic%40Home.%20Please%20share%20the%20available%20appointment%20slots';

document.querySelectorAll('[data-whatsapp-link]').forEach((link) => {
  link.href = WHATSAPP_LINK;
});

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
