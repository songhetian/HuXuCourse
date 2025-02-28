gsap.to('.box', {
    scrollTrigger: '.box', // start the animation when ".box" enters the viewport (once)
    x: 100,
    duration: 3,
    end: "+=100",
});