const mongoose = require('mongoose');

// Schema design
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide your name."],
        trim: true, //remove space of name
        // minLength: [3, "Name must be at least 3 characters."],
        // maxLength: [100, "Name is too large"]
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: [true, "This email already exists."],
    },
    password: {
        type: String,
        required: [true, "Please provide a valid password."],
        minLength: [6, "Password must be 6 characters."],
    },
    role: {
        type: String,
        trim: true,
        default: 'user'
    },
}, {
    timestamps: true,
});


const Users = mongoose.model('Users', userSchema);

module.exports = Users;
