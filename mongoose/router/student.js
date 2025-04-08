import express from "express";

const route = express.Router();

route.get('/home', (req, res) => {
    const data = {
        name: "test"
    }
    res.render('index', data);
});

export default route;