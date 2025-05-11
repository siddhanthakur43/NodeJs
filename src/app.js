const express = require('express');
const connectDB = require('./config/database');

const app = express();

connectDB().then(() => {
    console.log('DataBase connection established');
    app.listen(3000, () => {
        console.log('app running on 3000 port');
    })
}).catch((err) => {
    console.log("DataBase can't be connected");
})