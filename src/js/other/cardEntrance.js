import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function cardEntrance() {
  const cards = document.querySelectorAll('.card');
  const imgCards = document.querySelectorAll('.img-card');

  cards.forEach((card) => {
    gsap.from(card, {
      yPercent: -25,
      scale: 1.1,
      scrollTrigger: {
        trigger: card,
        start: 'top bottom',
        scrub: true,
        toggleActions: 'play none none reverse',
      },
    });
  });

  imgCards.forEach((card) => {
    gsap.from(card, {
      scale: 1.2,
      scrollTrigger: {
        trigger: card,
        start: 'top bottom',
        scrub: true,
        toggleActions: 'play none none reverse',
      },
    });
  });
}
