// const express = require('express');

// const app = express();


// app.get('/user/:userId/:name/:city', (req, res) => {
//     console.log(req.params);
//     res.send({ name: 'siddhant' });
// })

// // app.get('/user', (req, res) => {
// //     res.send({ firstName: "Siddhant", lastName: "Thakur" });
// // });

// // app.post('/user', (req, res) => {
// //     //logic to save data in DB
// //     res.send('Data Saved successfully to DB')
// // })

// // app.delete('/user', (req, res) => {
// //     //logic to delete data from DB
// //     res.send('Data deleted successfully from DB')
// // })

// // app.use('/hello', (req, res) => {
// //     res.send('Hello Express server');
// // });


// // app.use('/',(req, res) => {
// //     res.send('Express server');
// // })


// app.listen(3000, () => {
//     console.log('Server is running at port 3000');
// })

const express = require('express');

const app = express();

app.use('/user', (req, res) => {
    // console.log(req.params);
    console.log(req.query);
    res.send('Server running');
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})