require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_WEB_HOOK_SECRET;
const Razorpay = require("razorpay");
const instance = new Razorpay({ key_id: process.env.RAZORPAY_KEY_ID, key_secret: process.env.RAZORPAY_SECRET_KEY, });
const crypto = require('crypto');
const ServiceOrder = require('../models/orderModel');
const Registration = require('../models/registrationModel');


exports.postStripeCCS = async (req, res, next) => {
    try {
        const session = await stripe.checkout.sessions.create({
            metadata: {
                userName: req.body.userName,
                userEmail: req.body.userEmail,
                phoneNumber: req.body.phoneNumber,
                serviceName: req.body.serviceName,
                amount: req.body.amount,
                source: req.body.source,
                paymentMethod: req.body.paymentMethod,
                quantity: req.body.quantity,
                registrationId: req.body.registrationId,
            },
            line_items: [
                {
                    price_data: {
                        currency: req.body.currency,
                        product_data: { name: req.body.serviceName },
                        unit_amount: req.body.amount,
                    },
                    quantity: 1,
                }
            ],
            customer_email: req.body.userEmail,
            mode: 'payment',
            success_url: `${process.env.CLIENT_URL}/stripe/checkout?success=true&path=${req.body.path}`,
            cancel_url: `${process.env.CLIENT_URL}/stripe/checkout?canceled=true&path=${req.body.path}`,
        });

        session.url ?
            res.status(200).json({ url: session.url })
            :
            res.status(500).json({
                message: 'Something went wrong!',
                error: true,
            });
    } catch (err) {
        next(err);
    }
};

exports.postStripeWebHook = async (req, res, next) => {
    try {
        const sig = req.headers['stripe-signature'];

        const event = await stripe.webhooks.constructEvent(req.body, sig, endpointSecret);

        if (event.type === 'checkout.session.completed') {
            const order = new ServiceOrder({
                userName: event.data.object.metadata.userName,
                userEmail: event.data.object.metadata.userEmail,
                phoneNumber: event.data.object.metadata.phoneNumber,
                serviceName: event.data.object.metadata.serviceName,
                totalAmount: event.data.object.amount_total / 100, //divided 100 for converting cent to dollar
                currency: event.data.object.currency,
                paymentStatus: event.data.object.payment_status,
                quantity: event.data.object.metadata.quantity,
                transactionId: event.data.object.payment_intent,
                paymentMethod: event.data.object.metadata.paymentMethod,
                source: event.data.object.metadata.source,
            });
            const result = await order.save();
            if (result._id && event.data.object.metadata.registrationId) {
                await Registration.updateOne(
                    { _id: event.data.object.metadata.registrationId },
                    { $push: { serviceOrders: result._id } }
                );
            }

            return res.status(200).json(result);
        } else {
            res.status(403).json({})
        }
    } catch (err) {
        return next(err);
    };
};


exports.postRazorpayCreateOrder = async (req, res, next) => {
    try {
        const order = await instance.orders.create({
            amount: req.body.amount,
            currency: req.body.currency,
        });

        order ?
            res.status(200).json(order)
            :
            res.status(500).json({ message: 'Something went wrong!' });

    } catch (err) {
        err && res.status(500).json(err);

    }
};

exports.postRazorpayVerify = async (req, res, next) => {
    try {
        const body = req.body.razorpay_order_id + "|" + req.body.razorpay_payment_id;
        const expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_SECRET_KEY)
            .update(body.toString())
            .digest('hex');

        if (expectedSignature === req.body.razorpay_signature) {
            const orderData = new ServiceOrder({
                userName: req.body.userName,
                userEmail: req.body.userEmail,
                phoneNumber: req.body.phoneNumber,
                serviceName: req.body.serviceName,
                totalAmount: req.body.amount / 100, //divided 100 for converting cent to dollar
                currency: req.body.currency,
                paymentStatus: req.body.paymentStatus,
                quantity: req.body.quantity,
                transactionId: req.body.razorpay_payment_id,
                paymentMethod: req.body.paymentMethod,
                source: req.body.source,
            });
            const result = await orderData.save();
            
            if (result._id && req.body.registrationId) {
                await Registration.updateOne(
                    { _id: req.body.registrationId },
                    { $push: { serviceOrders: result._id } }
                );
            };

            return res.status(200).json(result);
        } else {
            res.status(403).json({ message: 'Payment is not verified!' })
        };
    } catch (err) {
        next(err);
    }
};


exports.getAllOrders = async (req, res, next) => {
    try {
        const { email } = req.decoded;
        const result = await ServiceOrder.find({ email: email });
        res.status(200).json(result);
    }
    catch (err) {
        next(err)
    }
};