import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function cardEntrance() {
  const cards = document.querySelectorAll('.card');
  const imgCards = document.querySelectorAll('.img-card');

  cards.forEach((card) => {
    gsap.from(card, {
      yPercent: 20,
      opacity: 0,
      scale: 1.1,
      duration: 1.5,
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        // scrub: true,
        toggleActions: 'play none none reverse',
      },
    });
  });
}
