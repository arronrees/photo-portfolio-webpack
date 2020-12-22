import gsap from 'gsap';

export function animationEnter(container) {
  const tl = gsap.timeline();

  tl.to(container, {
    autoAlpha: 0,
  });

  return tl;
}
