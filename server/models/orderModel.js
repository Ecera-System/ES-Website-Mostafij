const mongoose = require('mongoose');

// Schema design
const orderSchema = mongoose.Schema({
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
    currency: {
        type: String,
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


const ServiceOrder = mongoose.model('ServiceOrders', orderSchema);

module.exports = ServiceOrder;
