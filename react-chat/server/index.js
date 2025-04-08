import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

const app = express();

app.use(cors());
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173"
    }
});

io.on('connection', (socket) => {
    socket.on('message', (message) => {
        console.log(message);

        io.emit('message', message);
    })
})




server.listen(3000, () => {
    console.log('启动');
});