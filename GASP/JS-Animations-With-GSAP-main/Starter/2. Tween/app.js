// gsap.to(".box", { y: 200, duration: 2, repeat: -1, yoyo: true });
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');
const tween = gsap.to(".box", {
    y: 100,
    duration: 1,
    stagger: {
        amount: 1,
        each: 0.125,
        ease: 'power1'
    }
    , repeat: -1,
    yoyo: true
});

start.addEventListener('click', function () {
    tween.play();
});
pause.addEventListener('click', function () {
    tween.pause();
});
reset.addEventListener('click', function () {
    tween.restart();
});


