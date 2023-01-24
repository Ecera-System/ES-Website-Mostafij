const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const registrationSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide your name."],
        trim: true,
    },
    phoneNumber: {
        type: String,
        trim: true,
        required: [true, "Phone number must be needed."],
    },
    email: {
        type: String,
        required: [true, "Email address must be needed."],
        trim: true,
    },
    passport: {
        type: String,
        required: [true, "Passport copy must be needed."],
    },
    role: {
        type: String,
        trim: true,
        default: 'user'
    },
    source: {
        type: String,
        trim: true,
    },
    serviceOrders: [{
        type: ObjectId,
        ref: "ServiceOrders"
    }],
}, {
    timestamps: true,
});


const Registration = mongoose.model('Registration', registrationSchema);

module.exports = Registration;