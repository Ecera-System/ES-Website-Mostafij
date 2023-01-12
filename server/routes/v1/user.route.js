const express = require('express');
const router = express.Router();
const {
    signup,
    activateEmail,
    login,
    getSingleUser
} = require('../../controllers/user.controller');
const userAuthorize = require('../../middleware/userAuthorize');


router.route('/signup').post(signup);
router.route('/email/activate').post(activateEmail);
router.route('/login').post(login);
router.route('/single').get(userAuthorize, getSingleUser);


module.exports = router;
