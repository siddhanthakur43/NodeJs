const validator = require('validator');

const validation = (req) => {
    const { firstName, lastName, emailId, password } = req.body;
    if (!firstName || !lastName) {
        throw new Error('Name is Not Valid');
    } else if (!firstName.length > 4 && !firstName.length < 50) {
        throw new Error("Name length is not valid");
    } else if (!validator.isEmail(emailId)) {
        throw new Error("Email is not valid");
    } else if (!validator.isStrongPassword(password)) {
        throw new Error('Please Enter the strong password');
    }
}

module.exports = {
    validation,
}