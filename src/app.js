const express = require('express');
const connectDB = require('./config/database');
const User = require('./models/user');
const { validation } = require('./utils/validation');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());

app.post('/signup', async (req, res) => {

    try {
        //validation
        validation(req);
        //password encryption
        const { firstName, lastName, emailId, password } = req.body;
        const passwordHash = await bcrypt.hash(password, 10);
        const user = new User({
            firstName,
            lastName,
            emailId,
            password: passwordHash
        })
        await user.save()
        res.send('User Added Successfully');
    } catch (error) {
        res.status(400).send("ERROR:- " + error.message);
    }

});

app.post('/signin', async (req, res) => {
    try {
        const { emailId, password } = req.body;
        const user = await User.find({ emailId: emailId });
        console.log(user, 'user');
        if (user.length == 0) {
            throw new Error("Invalid Credentials");
        }
        console.log(password, 'password');
        const isValidPassword = await bcrypt.compare(password, user[0].password);
        console.log(isValidPassword), 'isValidPassword';
        if (isValidPassword) {
            res.send('Login Successfull');
        } else {
            throw new Error("Invalid Credentials");
        }

    } catch (error) {
        res.status(400).send('Error:- ' + error.message)
    }
})

//find user using email id
app.get('/user', async (req, res) => {
    const email = req.body.emailId;
    try {
        const user = await User.find({ emailId: email });
        res.send(user);
    } catch (error) {
        res.status(400).send('User Not found');
    }
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

app.patch('/user/:userId', async (req, res) => {
    const userId = req.params?.userId;
    const data = req.body;
    const isAllowedUpdates = ['age', 'skills', 'about', 'photoUrl']
    try {
        const update = Object.keys(data).every((key) => isAllowedUpdates.includes(key));
        if (!update) {
            throw new Error("Updates Not Allowed");
        }
        if (data.skills.length > 10) {
            throw new Error('Skills can not be more then 10');
        }
        const user = await User.findByIdAndUpdate(userId, data, { returnDocument: 'after', runValidators: true },);
        console.log(user);
        res.send("user updated successfully");
    } catch (error) {
        res.status(400).send("Something went wrong" + " " + error.message);

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