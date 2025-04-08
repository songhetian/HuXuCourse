import express from "express";
import { createUser } from "../controllers/userController.js";

const router = express.Router();

//控制器

router.route('/').post(createUser);

//中间件



export default router;