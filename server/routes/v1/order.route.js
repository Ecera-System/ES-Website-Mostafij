const express = require('express');
const router = express.Router();
const userAuthorize = require('../../middleware/userAuthorize');
const {
    postStripeCCS,
    postStripeWebHook,
    postRazorpayCreateOrder,
    postRazorpayVerify,
    getUserServicesOrder,
} = require('../../controllers/order.controller');


router.route('/create-checkout-session').post(postStripeCCS);
router.route('/stripe/webhook').post(postStripeWebHook);
router.route('/razorpay-create-order').post(postRazorpayCreateOrder);
router.route('/razorpay-verify').post(postRazorpayVerify);

router.route('/services-order').get(userAuthorize, getUserServicesOrder);


module.exports = router;
