document.addEventListener('DOMContentLoaded', function () {
  function setActiveMenuItem() {
    let currentPage = window.location.pathname.split('/').filter(Boolean).pop();
    let activeItem = document.querySelector(`nav .menu-item[data-page="${currentPage}"]`);

    if (activeItem) {
      activeItem.style.color = '#cbea7b';
    }
  }

  setActiveMenuItem();

  const observer = new MutationObserver(() => {
    setActiveMenuItem();
    if (document.querySelector('nav .menu-item.active')) {
      observer.disconnect();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
});

function toggleMenu() {
  const cross = document.getElementById('cross');
  const navLinks = document.getElementById('nav-menu');
  const body = document.body;

  navLinks.classList.add('show');

  cross.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
}

const navLinks = document.querySelectorAll('.nav-menu .menu-item');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const nav = document.querySelector('.nav-menu .nav-menu-mobile');
    navLinks.classList.remove('show');
    body.style.overflow = '';
  });
});
