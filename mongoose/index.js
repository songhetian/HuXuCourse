import 'dotenv/config'
import express from "express";
import path from 'path';
import connectDB from "./db/connectDB.js";
import route from './router/student.js';
import { insertMany, singleDoc, updateOne } from './models/Movies.js';

const app = express();
const port = process.env.PORT || 8000;
const DATABASE_URL = process.env.DATABASE_URL;
connectDB(DATABASE_URL);

app.use('/static', express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), './public'));
app.use('/student', route);

// insertMany();

singleDoc("67da192e2ba2c2b6dde911c8");
updateOne("67da192e2ba2c2b6dde911c8");
app.listen(port, () => {
    console.log("成功");
});

