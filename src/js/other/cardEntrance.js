import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function cardEntrance() {
  const cards = document.querySelectorAll('.card');

  cards.forEach((card) => {
    gsap.from(card, {
      y: 50,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: card,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });
  });
}
