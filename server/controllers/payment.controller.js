require('dotenv').config();
const PaymentOrder = require('../models/Payment');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_WEB_HOOK_SECRET;


exports.postStripeCCS = async (req, res, next) => {
    try {
        const session = await stripe.checkout.sessions.create({
            metadata: {
                serviceName: req.body.serviceName,
                price: req.body.price,
                source: req.body.source,
                paymentMethod: req.body.paymentMethod,
                quantity: 1,
            },
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: { name: req.body.serviceName },
                        unit_amount: req.body.price,
                    },
                    quantity: 1,
                }
            ],
            mode: 'payment',
            success_url: `${process.env.CLIENT_URL}/invoice?success=true`,
            cancel_url: `${process.env.CLIENT_URL}/invoice?canceled=true`,
        });

        session.url ?
            res.status(200).json({ url: session.url }) :
            res.status(500).json({
                message: 'Something went wrong!',
                error: true,
            });
    } catch (err) {
        next(err);
    }
};


exports.postStripeWebHook = async (req, res, next) => {
    const sig = req.headers['stripe-signature'];
    let event;

    if (endpointSecret) {
        try {
            event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
        } catch (err) {
            return next(err);
        }
    };

    if (event.type === 'checkout.session.completed') {
        try {
            const order = new PaymentOrder({
                userName: event.data.object.customer_details.name,
                userEmail: event.data.object.customer_details.email,
                phoneNumber: event.data.object.customer_details.phone,
                serviceName: event.data.object.metadata.serviceName,
                totalAmount: event.data.object.amount_total / 100,
                paymentStatus: event.data.object.payment_status,
                quantity: event.data.object.metadata.quantity,
                transactionId: event.data.object.payment_intent,
                paymentMethod: event.data.object.metadata.paymentMethod,
                source: event.data.object.metadata.source,
            });
            const result = await order.save();
        } catch (err) {
            return next(err);
        };
    };

    res.send();
};