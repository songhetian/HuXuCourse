var tl = gsap.timeline({ repeat: 2 });

tl.to('.box1', { x: -100, opacity: 0, duration: 1 }).set('.box', { x: 0, opacity: 1 }).to('.box2', { y: -100, opacity: 0, duration: 1 }).to('.box3', { x: 100, opacity: 0, duration: 1 })
