import gsap from 'gsap';

export function animationLeave() {
  const tl = gsap.timeline();

  tl.to(container, {
    autoAlpha: 0,
  });

  return tl;
}
