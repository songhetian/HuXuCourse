console.log("script start");

setTimeout(() => {
    console.log("setTimeout 1");
}, 10);

Promise.resolve()
    .then(() => {
        console.log("promise 1");
        setTimeout(() => console.log('promise-settimeout01'), 0);
        return Promise.resolve().then(() => {
            console.log("promise 2");
        });
    })
    .then(() => {
        console.log("promise 3");
        setTimeout(() => console.log('promise-settimeout'), 0);
    });

setTimeout(() => {
    console.log("setTimeout 2");
}, 0);

console.log("script end");
