const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://siddhantthakur043:Sid123@nodejs.zm9epyl.mongodb.net/devTinder');
}

module.exports = connectDB;