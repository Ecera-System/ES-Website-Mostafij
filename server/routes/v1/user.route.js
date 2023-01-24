const express = require('express');
const router = express.Router();
const {
    signup,
    activateEmail,
    login,
    getSingleUser,
    registration,
    uploadPassport,
    getPassport,
} = require('../../controllers/user.controller');
const uploader = require('../../middleware/uploader');
const userAuthorize = require('../../middleware/userAuthorize');


router.post('/upload-passport', uploader.single("passport"), uploadPassport);
router.post('/registration', registration);
router.route('/signup').post(signup);
router.route('/email/activate').post(activateEmail);
router.route('/login').post(login);
router.route('/single').get(userAuthorize, getSingleUser);


module.exports = router;
