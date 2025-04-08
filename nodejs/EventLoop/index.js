const fs = require('fs');

console.log("开始");

setTimeout(() => {
    console.log("setTimeout");
}, 100);


setImmediate(() => {
    console.log('setImmediate');
});

new Promise((resolve) => resolve('promise')).then(res => console.log(res));

process.nextTick(() => {
    console.log('nextTick');

});

fs.readFile('./info.txt', 'utf-8', (error, data) => {
    console.log(data);
    setTimeout(() => {
        console.log("setTimeout1");
    }, 0);

    setImmediate(() => {
        console.log('setImmediate1');
    });
});

fs.writeFileSync('./text2.txt', '123456');
fs.writeFile('./text1.txt', '123456', (error) => {
    console.log(error);

});




console.log("结束");

console.log("主进程");
console.log("异步进程");
console.log("timer->poll->check");
console.log("timer setTimeout setinterval");
console.log("poll IO操作 网络请求");
console.log("check setImmediate");


