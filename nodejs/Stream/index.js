import { createReadStream } from 'fs';

const stream = createReadStream('./data.txt', { encoding: 'utf-8' });

stream.on('data', (data) => {
    console.log(data);
})