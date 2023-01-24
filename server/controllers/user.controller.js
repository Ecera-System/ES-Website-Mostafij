require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Users = require('../models/userModel');
const Registration = require('../models/registrationModel');
const { verifyEmail } = require('../middleware/emailSender');


exports.uploadPassport = async (req, res, next) => {
    try {
        res.status(200).send(req.file)
    } catch (err) {
        next(err);
    }
};

exports.registration = async (req, res, next) => {
    try {
        const data = new Registration(req.body);
        const result = await data.save();
        if (result) res.status(200).json(result);
    } catch (err) {
        next(err)
    }
};

exports.signup = async (req, res, next) => {
    try {
        const { name, phoneNumber, email, password, role } = req.body;
        const findEmail = await Users.findOne({ email });
        if (findEmail) return res.status(406).json({ message: "This email already exists." });

        const passwordHash = await bcrypt.hash(password, 12);
        const user = {
            name,
            phoneNumber,
            email,
            password: passwordHash,
            role
        };
        const activation_token = jwt.sign(user, process.env.ACTIVATION_TOKEN_SECRET, { expiresIn: '5m' });
        const url = `${process.env.CLIENT_URL}/user/activate/${activation_token}`;

        verifyEmail({ email, url });
        res.status(200).json({
            message: "Register success! Please verify your email."
        });
    } catch (err) {
        if (err) return res.status(500).json({ message: "Something went wrong!" })
    }
};

exports.activateEmail = async (req, res, next) => {
    try {
        const verify = jwt.verify(req.body.activation_token, process.env.ACTIVATION_TOKEN_SECRET);
        const findEmail = await Users.findOne({ email: verify.email });
        if (findEmail) return res.status(406).json({ message: "This email already exists." });

        const user = new Users(verify);
        const result = await user.save();
        if (result) res.status(200).json({ message: "Your account has been activated!" });

    } catch (err) {
        console.log(err);
        if (err) return res.status(500).json({ message: "Activation link expired!" })
    }
};

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await Users.findOne({ email });
        if (!user) return res.status(404).json({ message: "This email does not exist." });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: "Incorrect password!" });

        const user_token = jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN_SECRET);

        res.status(200).json({
            user: user_token,
            message: "Login success!"
        });

    } catch (err) {
        if (err) return res.status(500).json({ message: "Something went wrong!" })
    }
};

exports.getSingleUser = async (req, res, next) => {
    try {
        const user = await Users.findOne({ _id: req.decoded.id });
        res.status(200).json(user);
    } catch (err) {
        next(err)
    }
}