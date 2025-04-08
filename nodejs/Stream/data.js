import fs from 'fs';

for (let index = 0; index < 1000; index++) {
    fs.appendFile('./data.txt', `hello${index + 1000}\r\n`, (error) => {

    });
}