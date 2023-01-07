const express = require('express');
const router = express.Router();
const { postStripeCCS, postStripeWebHook } = require('../../controllers/payment.controller');


router.route('/create-checkout-session').post(postStripeCCS);
router.route('/stripe/webhook').post(postStripeWebHook);


module.exports = router;
