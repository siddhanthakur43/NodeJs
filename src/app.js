const express = require('express');

const { userAuth, adminAuth } = require('./middlewares/auth')

const app = express();

app.use('/admin', adminAuth);

app.post('/user/login', (req, res) => {
    res.send('User logged in successfully');
});

app.use('/user', userAuth);

app.get('/user/getAllUser', (req, res) => {
    res.send('All user data Received');
});

app.get('/user/deleteUser', (req, res) => {
    res.send('user data deleted');
});

app.get('/admin/data', (req, res) => {
    res.send("admin Data");
})

app.listen(3000, () => {
    console.log('app running on 3000 port');
})