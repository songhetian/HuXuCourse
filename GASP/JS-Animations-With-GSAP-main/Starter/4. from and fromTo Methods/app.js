gsap.from('.box0', { y: 100, opacity: 0, scale: 0.5, duration: 1, repeat: -1 });
gsap.fromTo('.box1', { y: 100, opacity: 0, scale: 0.5 }, { y: -100, opacity: 1, duration: 1, repeat: -1, scale: 3 });