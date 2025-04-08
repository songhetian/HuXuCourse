import jwt from "jsonwebtoken";
import User from "../models/User.js";
import asyncHandler from "./asyncHandler.js";



//检查用户是否经过身份验证

const authenticate = asyncHandler(async (req, res, next) => {
    let token;

    token = req.cookies.jwt;

    if (token) {
        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decode.userId).select('-password');
            next();
        } catch (err) {
            res.status(401);
            throw new Error("没有令牌授权");
        }
    } else {
        res.status(401);
        throw new Error("没有令牌授权");
    }
});


//检查用户是否是管理员
const authorizeAdmin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(401).send("不是管理员");
    }
}