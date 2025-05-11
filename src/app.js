const express = require('express');
const connectDB = require('./config/database');
const User = require('./models/user');

const app = express();

app.post('/signup', async (req, res) => {
    const newUser = {
        firstName: "Siddhant",
        lastName: "Thakur",
        emailId: "siddhant@gmail.com",
        password: "sid@123",
        age: 25
    }
    const user = new User(newUser)
    try {
        await user.save()
        res.send('User Added Successfully');
    } catch (error) {
        res.status(400).send('Something went wrong');
    }

})

connectDB().then(() => {
    console.log('DataBase connection established');
    app.listen(3000, () => {
        console.log('app running on 3000 port');
    })
}).catch((err) => {
    console.log("DataBase can't be connected");
})