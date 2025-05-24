const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 4, // for strings
        maxLength: 50,
    },
    lastName: {
        type: String
    },
    emailId: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        validate(value) {
            if (!['Male', "Female"].includes(value)) {
                throw new Error('Gender is not valid');
            }
        }
    },
    age: {
        type: Number,
        min: 18 //only work on numer
    },
    photoUrl: {
        type: String,
        default: 'www.photo.com',
    },
    about: {
        type: String,
        default: "I'm a Software developer"
    },
    skills: {
        type: [String]
    }
}, { timestamps: true});

const User = mongoose.model('User', userSchema);

module.exports = User;