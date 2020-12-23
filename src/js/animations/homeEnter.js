import gsap from 'gsap';

export function homeEnter() {
  const tl = gsap.timeline({
    defaults: {
      duration: 1,
      ease: 'power1.Out',
    },
  });

  const heading = document.querySelector('.home-header');
  const main = document.querySelector('.home-main');

  tl.to(document, { autoAlpha: 1 })
    .fromTo(
      heading,
      {
        autoAlpha: 0,
        y: -50,
      },
      { y: 0, autoAlpha: 1 }
    )
    .fromTo(
      main,
      {
        autoAlpha: 0,
        y: -50,
      },
      { autoAlpha: 1, y: 0 },
      '-=0.5'
    );

  return tl;
}
