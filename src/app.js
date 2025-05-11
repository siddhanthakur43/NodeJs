const express = require('express');

const app = express();

// app.get('/user', (req, res, next) => {
//     console.log('Request handler no. 1');
//     // res.send('Hello 1');
//     next();
// }, (req, res, next) => {
//     console.log('Request handler no. 2')
//     // res.send('Hello 2');
//     next();
// })

app.get('/user', (req, res, next) => {
    console.log('1');
    next();
});

app.get('/user', (req, res) => {
    console.log('2');
    res.send('res from 2');
})

app.listen(3000, () => {
    console.log('app running on 3000 port');
})