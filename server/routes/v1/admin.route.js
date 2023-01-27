const express = require('express');
const router = express.Router();
const userAuthorize = require('../../middleware/userAuthorize');
const { getRegistration, getAllUsers, getAllServicesOrder, deleteUserById, promoteUserById } = require('../../controllers/admin-controller');

router.route('/registration').get(userAuthorize, getRegistration);
router.route('/user').get(userAuthorize, getAllUsers);
router.route('/user/:id')
    .delete(userAuthorize, deleteUserById)
    .patch(userAuthorize, promoteUserById)
router.route('/services-order').get(userAuthorize, getAllServicesOrder);

module.exports = router;
