const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const app = express();
const port = process.env.port || 4000;
const path = require('path');

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));

app.get("views", "./src/views");
app.set("view engine", "ejs");

app.get("/", (req,res) =>{
    res.send('file not found');
})

app.listen(port, ()=>{
    debug("Listening on Port : " + chalk.green(port));
})