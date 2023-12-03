const User = require('../models/User'); 
const jwt = require('jsonwebtoken');
const fs = require("fs");
require('dotenv').config();

module.exports = {
    postUser: async (req, res) => {
        try {
            req.body.email = req.body.email.toLowerCase();
            let user = await User.findOne({ email: req.body.email })
            if (user) {
                throw new Error('This email is already taken !')
            } else {
                // req.body.image = "/images/users/avatar.png";
                await User.create(req.body)
            }
            res.send({
                err: false,
                message: "User created",
                user: user
            })
        }
        catch (err) {
            res.send({
                err: true,
                message: err.message
            });
        }
    },
    postLogin: async (req, res) => {
        try {
            req.body.email = req.body.email.toLowerCase();
            user = await User.findOne({ email: req.body.email });
            if (!user) {
                throw new Error('Invalid credentials');
            }
            const payload = {
                id: user._id,
                email: user.email,
                username: user.username
            }
            token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "30m" });
            res.send({
                err: false,
                message: "User logged in ",
                token: token,
                userPW: user.password
            });
        }
        catch (err) {
            res.send({
                err: true,
                message: err.message
            });
        }
    },
    getUser: async (req, res) => {
        try {
            user = await User.findById(req.user.id)
            res.send({
                err: false,
                message: `Info for user`,
                user: user
            })
        }
        catch (err) {
            res.send({
                err: true,
                message: err.message
            })
        }
    },
    putLogout: async (req, res) => {
        try {
            const payload = {
                id: req.user.id
            }
            token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: '1s'
            })
            res.send({
                err: false,
                message: "User Loged out",
                token: token
            });
        }
        catch (err) {
            res.send({
                err: true,
                message: err.message
            })
        }
    }
}