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

detailRouter.route("/detail").get((req, res) => {
    res.render('detail');
});

app.use("/shop/", detailRouter)

app.get("/shop", (req, res) => {
    res.render('shop', { username: 'Teddy' });
});

app.listen(port, () => {
    debug("Listening on Port : " + chalk.green(port));
});