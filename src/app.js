const express = require('express');
const connectDB = require('./config/database');
const User = require('./models/user');

const app = express();
app.use(express.json());

app.post('/signup', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        res.send('User Added Successfully');
    } catch (error) {
        res.status(400).send('Something went wrong');
    }

});

//find user using email id
app.get('/user', async (req, res) => {
    const email = req.body.emailId;
    const user = await User.find({ emailId: email });
    console.log(user);
})

// to get all the users
app.get('/feed', async (req, res) => {
    try {
        const users = await User.find({});
        if (users.length > 0) {
            res.send(users)
        } else {
            res.send("no users found");
        }
    } catch (error) {
        res.status(400).send("Something went wrong");
    }
});

app.delete('/user', async (req, res) => {
    const userId = req.body.userId;
    try {
        const user = await User.findByIdAndDelete(userId);
        res.send('user deleted successfully');
    } catch (error) {
        res.status(400).send("Something went wrong");
    }

});

app.patch('/user', async (req, res) => {
    const userId = req.body.userId;
    const data = req.body;
    try {
        const user = await User.findByIdAndUpdate(userId, data, { returnDocument: 'after' });
        console.log(user);
        res.send("user updated successfully");
    } catch (error) {
        res.status(400).send("Something went wrong");

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