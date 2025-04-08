import asyncHandler from "../middlewares/asyncHandler.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import createToken from "../utils/createToken.js";


const createUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        throw new Error("请输入字段");
    }

    const userExists = await User.findOne({ email });

    if (userExists) res.status(400).send("user already exists");

    //设置哈密密码
    const salt = bcrypt.getSalt(10);

});

export { createUser }