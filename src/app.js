const express = require('express');

const app = express();

app.use('/hello', (req, res) => {
    res.send('Hello Express server');
});

app.use('/',(req, res) => {
    res.send('Express server');
})

app.listen(3000, () => {
    console.log('Server is running at port 3000');
})