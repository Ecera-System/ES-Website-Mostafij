const ServiceOrder = require("../models/orderModel");
const Registration = require("../models/registrationModel");
const Users = require("../models/userModel");

exports.getRegistration = async (req, res, next) => {
    try {
        if (req.decoded.role !== 'admin') {
            return res.status(403).json({
                message: "You are not allowed!",
                logout: true
            })
        }
        else {
            const result = await Registration.find({}); //.populate("serviceOrders");
            res.status(200).json(result);
        }
    } catch (err) {
        next(err)
    }
};

exports.getAllUsers = async (req, res, next) => {
    try {
        if (req.decoded.role !== 'admin') {
            return res.status(403).json({
                message: "You are not allowed!",
                logout: true
            })
        }
        else {
            const result = await Users.find({});
            res.status(200).json(result);
        }
    } catch (err) {
        next(err)
    }
};

exports.deleteUserById = async (req, res, next) => {
    try {
        if (req.decoded.role !== 'admin') {
            return res.status(403).json({
                message: "You are not allowed!",
                logout: true
            })
        }
        else {
            const { id } = req.params;
            const result = await Users.deleteOne({ _id: id });
            res.status(200).json(result);
        }
    } catch (err) {
        next(err)
    }
};

exports.promoteUserById = async (req, res, next) => {
    try {
        if (req.decoded.role !== 'admin') {
            return res.status(403).json({
                message: "You are not allowed!",
                logout: true
            })
        }
        else {
            const { id } = req.params;
            const result = await Users.updateOne({ _id: id }, { $set: req.body });
            res.status(200).json(result);
        }
    } catch (err) {
        next(err)
    }
};

exports.getAllServicesOrder = async (req, res, next) => {
    try {
        if (req.decoded.role !== 'admin') {
            return res.status(403).json({
                message: "You are not allowed!",
                logout: true
            })
        }
        else {
            const orderIds = req.query.orderIds;

            let result;
            if (orderIds !== 'undefined') {
                result = await ServiceOrder.find({ _id: { $in: orderIds.split(',') } });
            }
            else {
                result = await ServiceOrder.find();
            };

            res.status(200).json(result);
        }
    } catch (err) {
        next(err)
    }
};