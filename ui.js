function toggleSubmenu(event) {
    event.preventDefault(); // 
    const parent = event.target.closest('.has-submenu');
    parent.classList.toggle('open');
  }

  document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});