const mongoose = require('mongoose');

// Schema design
const paymentSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number
    },
    serviceName: {
        type: String,
        required: true,
    },
    totalAmount: {
        type: Number,
        required: true,
    },
    paymentStatus: {
        type: String,
    },
    quantity: {
        type: Number,
        required: true,
    },
    transactionId: {
        type: String,
        required: true,
    },
    paymentMethod: {
        type: String,
        required: true,
    },
    source: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
});


const PaymentOrder = mongoose.model('PaymentOrder', paymentSchema);

module.exports = PaymentOrder;
