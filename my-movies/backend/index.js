import 'dotenv/config'
import path from "path";
import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import connectDB from "./config/data.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
// console.log(process.env.MONGO_URL);
// console.log(path.dirname(path.join(process.cwd())));

connectDB();

const app = express();


//中间件
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//路由

app.use("/api/v1/users", userRoutes);





const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`成功`);
})

