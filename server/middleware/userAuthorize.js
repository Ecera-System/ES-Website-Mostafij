require('dotenv').config();
const jwt = require('jsonwebtoken');
const Users = require('../models/userModel');

const userAuthorize = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) return res.status(401).json({
            message: "Unauthorized access!",
            logout: true
        });

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, decoded) => {
            if (err) return res.status(403).json({
                message: "Forbidden access!",
                logout: true
            });
            const user = await Users.findOne({ _id: decoded.id });
            if (!user) return res.status(404).send({
                message: "User isn't exist",
                logout: true,
                notExist: true
            });
            req.decoded = user;
            next();
        })
    } catch (err) {
        return res.status(500).send({ message: err.message })
    }
};

module.exports = userAuthorize;