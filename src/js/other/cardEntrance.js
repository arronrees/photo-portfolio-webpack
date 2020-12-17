import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function cardEntrance() {
  const cards1 = document.querySelectorAll('.card1');
  const cards2 = document.querySelectorAll('.card2');

  cards1.forEach((card) => {
    gsap.from(card, {
      yPercent: 15,
      scale: 1.1,
      duration: 0.5,
      scrollTrigger: {
        trigger: card,
        start: 'top 80%',
        scrub: true,
        toggleActions: 'play none none reverse',
      },
    });
  });

  cards2.forEach((card) => {
    gsap.from(card, {
      yPercent: 25,
      scale: 0.9,
      duration: 0.5,
      scrollTrigger: {
        trigger: card,
        start: 'top bottom',
        scrub: true,
        toggleActions: 'play none none reverse',
      },
    });
  });
}
