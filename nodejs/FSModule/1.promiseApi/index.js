import * as fs from "fs/promises";

try {
    // await fs.mkdir("F:\\nodeTest\\time\\redux", { recursive: true });
    // console.log("文件创建成功");

    //读取文件
    // const files = await fs.readdir("F:\\nodeTest\\course");
    // for (const file of files) {
    //     console.log(file);
    // }

    //删除文件夹
    // await fs.rmdir("F:\\nodeTest\\time\\redux");


    //创建文件
    // await fs.writeFile("./FSModule/README.md", "hello nodejs");
    // await fs.writeFile("./FSModule/hello.txt", "hello nodejs");
    // await fs.appendFile("./FSModule/hello.txt", "追加的内容", err => {
    //     if (err) throw err;
    //     console.log("追加成功");
    // });
    //读取文件
    // const content = await fs.readFile("./FSModule/hello.txt", 'utf-8');
    // console.log(content);

    //复制文件
    // await fs.copyFile("README.md", "info.txt");

    //统计信息
    const info = await fs.stat("info.txt");
    console.log(info.isFile());
    console.log(info.isDirectory());



    //删除file



} catch (error) {
    console.error(error);

}