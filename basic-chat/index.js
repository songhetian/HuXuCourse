import express from "express";
import { Server } from "socket.io";
import http from "http";
import path from "path";



const app = express();

const server = http.createServer(app);
const io = new Server(server);


app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), './index.html'));
})

io.on('connection', (socket) => {
    socket.on('message', (message) => {
        console.log(message);
    });

    socket.emit('ServerMessage', "服务器消息");
})

server.listen(3000, () => {
    console.log("连接成功");

})