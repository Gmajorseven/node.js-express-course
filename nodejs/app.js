const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const app = express();
const detailRouter = express.Router();

const port = process.env.port || 4000;
const path = require('path');


app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/src/views/public")));

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.get("/shop", (req, res) => {
    res.render('shop', { 
        product : [
        {name: 'Psychology of Money', writer: 'Morgan Housel', price: 275.5, imgsrc: '../img/img_psychology.jpg'},
        {name: 'The Bitcion Standard', writer: 'Saifedean Ammous', price: 310.5, imgsrc: '../img/img_the.jpg'},
        {name: 'Leyered Money', writer: 'Nik Bhatia', price: 256.5, imgsrc: '../img/img_leyered.jpg'},
        {name: 'Inventing Bitcoin', writer: 'Yan Pritzker', price: 202.5, imgsrc: '../img/img_inventing.jpg'}
        ]
    });
});

app.listen(port, () => {
    debug("Listening on Port : " + chalk.green(port));
});