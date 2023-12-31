var express = require('express');
var router = express.Router();
const controller = require("../controllers/UserController");
const { expressjwt: expressJwt } = require('express-jwt');
require('dotenv').config();


router
.post('/register',controller.postUser)
.post('/login',controller.postLogin)
.put('/logout',expressJwt({ secret: process.env.JWT_SECRET, algorithms: ['HS256'] }),controller.putLogout)
// .patch('/update',jwt({ secret: process.env.JWT_SECRET, algorithms: ['HS256'] }),controller.postUpdate)
.get("/",expressJwt({ secret: process.env.JWT_SECRET, algorithms: ['HS256'] }),controller.getUser)
// .delete('/',jwt({ secret: process.env.JWT_SECRET, algorithms: ['HS256'] }),controller.deleteUser)
module.exports = router;