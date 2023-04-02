const express = require('express');
const router = express.Router();
const {
    signup,
    activateEmail,
    login,
    getSingleUser,
    registration,
    forgotPassword,
    resetPassword
} = require('../../controllers/user.controller');
const uploader = require('../../middleware/uploader');
const userAuthorize = require('../../middleware/userAuthorize');

router.post('/registration', uploader.single("passport"), registration);
router.route('/signup').post(signup);
router.route('/email/activate').post(activateEmail);
router.route('/login').post(login);
router.route('/forgot-password').post(forgotPassword);
router.route('/reset-password').patch(resetPassword);
router.route('/single').get(userAuthorize, getSingleUser);


module.exports = router;
