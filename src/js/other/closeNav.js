import gsap from 'gsap';

export function closeNav(nav, navLinks) {
  const tl = gsap.timeline();

  tl.to(navLinks, { duration: 0.5, stagger: 0.1, xPercent: -100, autoAlpha: 0 })
    .to(nav, { duration: 0.5, xPercent: -100 }, '-=0.3')
    .to('.line1', { duration: 0.2, width: '50px', rotate: 0, translateY: 0 }, 0)
    .to('.line2', { duration: 0.2, xPercent: 0, autoAlpha: 1 }, 0)
    .to(
      '.line3',
      { duration: 0.2, width: '20px', rotate: 0, translateY: 0 },
      0
    );
}
