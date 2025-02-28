
gsap.to('.box', {
    y: -200,
    duration: 2,
    repeat: -1,
    yoyo: true,
    stagger: {
        amount: 4,
        each: 0.5,
        ease: "none"
    }
})