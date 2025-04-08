import http from "http";
import fs from "fs";

const server = http. ((req, res) => {
    // res.setHeader("Content-type", "text/html");

    // res.end(`<h1>${req.url}</h1>`)

    if (req.url === "/home") {
        res.writeHead(200, 'ok', { "Content-Type": "text/html" });
        fs.readFile("./home.html", (error, data) => {
            if (error) throw error;
            res.end(data);
        })
    }
    // res.end("<h1>123454</h1>");
});

server.listen(8000, () => console.log("服务器启动成功"));