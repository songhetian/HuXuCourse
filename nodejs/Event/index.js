import EventEmitter from "events";

const customerEvent = new EventEmitter();


customerEvent.on('abc', (name) => {
    console.log(name);
});

customerEvent.once('abcd', (age) => {
    console.log(age);

})

customerEvent.emit('abc', 'fasdfsa');
customerEvent.emit('abcd', 1000);