import express from "express";
import http from "http";
import { fileURLToPath } from "node:url";
import path, { dirname, join } from "node:path";
import { Server } from "socket.io";


const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(join(process.cwd(), './index.html'));
});


io.on("connection", (socket) => {
    console.log("User Connected To (server)");
    // setTimeout(() => {
    //     socket.disconnect();
    // }, 5000);

    socket.emit('message', "欢迎来到服务器");
    socket.on('disconnect', () => {
        console.log("断开连接");
    });

    socket.on('newMessage', (message) => {
        console.log(message);
    })
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});