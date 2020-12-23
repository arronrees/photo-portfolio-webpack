import gsap from 'gsap';

import { openNav } from './openNav';
import { closeNav } from './closeNav';

export function navSlide() {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-item');
  const body = document.body;

  gsap.set(nav, { xPercent: -100 });
  gsap.set(navLinks, { xPercent: -100, autoAlpha: 0 });

  // Toggle Nav
  burger.addEventListener('click', () => {
    body.classList.toggle('nav-menu-open');

    if (body.classList.contains('nav-menu-open')) {
      openNav(nav, navLinks);
    } else {
      closeNav(nav, navLinks);
    }
  });
}
