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
        product: [
            { name: 'Psychology of Money', writer: 'Morgan Housel', price: 275.5, imgsrc: '../img/img_psychology.jpg', src: 'https://se-ed.com/product/The-Psychology-of-Money-%E0%B8%88%E0%B8%B4%E0%B8%95%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99.aspx?no=9786168187425' },
            { name: 'The Bitcion Standard', writer: 'Saifedean Ammous', price: 310.5, imgsrc: '../img/img_the.jpg', src: 'https://www.se-ed.com/product/The-Bitcoin-Standard-%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88%E0%B9%84%E0%B8%A3%E0%B9%89%E0%B8%A8%E0%B8%B9%E0%B8%99%E0%B8%A2%E0%B9%8C%E0%B8%81%E0%B8%A5%E0%B8%B2%E0%B8%87.aspx?no=9786160843107' },
            { name: 'Layered Money', writer: 'Nik Bhatia', price: 256.5, imgsrc: '../img/img_layered.jpg', src: 'https://www.se-ed.com/product/Layered-Money-%E0%B8%9E%E0%B8%B5%E0%B8%A3%E0%B8%B0%E0%B8%A1%E0%B8%B4%E0%B8%94%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%E0%B8%8B%E0%B9%89%E0%B8%AD%E0%B8%99%E0%B8%8A%E0%B8%B1%E0%B9%89%E0%B8%99.aspx?no=9786160847297' },
            { name: 'Inventing Bitcoin', writer: 'Yan Pritzker', price: 202.5, imgsrc: '../img/img_inventing.jpg', src: 'https://www.se-ed.com/product/Inventing-Bitcoin-%E0%B9%84%E0%B8%82%E0%B8%81%E0%B8%A5%E0%B9%84%E0%B8%81%E0%B8%99%E0%B8%A7%E0%B8%B1%E0%B8%95%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%E0%B9%80%E0%B8%9B%E0%B8%A5%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%99%E0%B9%82%E0%B8%A5%E0%B8%81.aspx?no=9786160846702' }
        ]
    });
});

app.listen(port, () => {
    debug("Listening on Port : " + chalk.green(port));
});