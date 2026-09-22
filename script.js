const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });
}

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', event => {
    const action = form.getAttribute('action') || '';
    if (action.includes('YOUR_FORM_ID')) {
      event.preventDefault();
      alert('Your Formspree endpoint is still a placeholder. Replace YOUR_FORM_ID in index.html to activate submissions.');
    }
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
