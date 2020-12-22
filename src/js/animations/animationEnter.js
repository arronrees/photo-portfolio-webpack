import gsap from 'gsap';

export function animationEnter() {
  const tl = gsap.timeline({
    defaults: {
      duration: 1,
      ease: 'power1.Out',
    },
  });

  const heading = document.querySelector('.header h1');
  const burger = document.querySelector('.burger');
  const main = document.querySelector('.main');

  tl.fromTo(
    [heading, burger],
    {
      autoAlpha: 0,
      y: -50,
    },
    { y: 0, autoAlpha: 1 }
  ).fromTo(
    main,
    {
      autoAlpha: 0,
      y: -50,
    },
    { autoAlpha: 1, y: 0 },
    '-=0.75'
  );

  return tl;
}
