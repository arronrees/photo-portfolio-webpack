export const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu li');
  const body = document.body;

  // Toggle Nav
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / navLinks.length + 0.3
        }s`;
      }
    });

    // Burger Animation
    burger.classList.toggle('toggle');

    body.classList.toggle('nav-menu-open');
  });
};
