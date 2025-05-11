const express = require('express');

const { userAuth, adminAuth } = require('./middlewares/auth')

const app = express();

// app.use('/admin', adminAuth);

// app.post('/user/login', (req, res) => {
//     res.send('User logged in successfully');
// });

// app.use('/user', userAuth);

// app.get('/user/getAllUser', (req, res) => {
//     res.send('All user data Received');
// });

// app.get('/user/deleteUser', (req, res) => {
//     res.send('user data deleted');
// });

// app.get('/admin/data', (req, res) => {
//     res.send("admin Data");
// })
app.use('/', (err, req, res, next) => {
    if (err) {
        res.send('Something went wrong');
    }
})

app.get('/user', (req, res) => {
    try {
        throw new Error('Errorsssss');
        res.send('Hellooooo'); 
    } catch (err) {
        res.send('Catch');
    }
})

app.listen(3000, () => {
    console.log('app running on 3000 port');
})