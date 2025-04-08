import * as fs from "fs";

fs.mkdir("test", error => {
    fs.writeFileSync("./test/hello.txt", 'hello')
    console.log("文件创建成功");
})