import gsap from 'gsap';

export function openNav(nav, navLinks) {
  const tl = gsap.timeline();

  tl.to(nav, { duration: 1, xPercent: 0 })
    .to(
      navLinks,
      { duration: 1, stagger: 0.2, xPercent: 0, autoAlpha: 1 },
      '-=0.5'
    )
    .to(
      '.line1',
      { duration: 0.2, width: '30px', rotate: -45, translateY: 5 },
      0
    )
    .to('.line2', { duration: 0.2, xPercent: 100, autoAlpha: 0 }, 0)
    .to(
      '.line3',
      { duration: 0.2, width: '30px', rotate: 45, translateY: -8 },
      0
    );
}
