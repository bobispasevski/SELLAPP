const express = require('express');
const router= express.Router();
const controller= require('../controllers/VehicleController');
const jwt = require('express-jwt');
require('dotenv').config();
const uploadVehiclePic=require ("../utilities/upload/vehiclesMulter");

router
.get('/cars',controller.getCars)
.get('/bikes',controller.getBikes)
.get('/trucks',controller.getTrucks)
.get('/vehicle/:id',controller.getVehicle)

.post('/myvehicles',jwt({ secret: process.env.JWT_SECRET, algorithms: ['HS256'] }),uploadVehiclePic.single('image'),controller.postVehicle)
.get('/myvehicles',jwt({ secret: process.env.JWT_SECRET, algorithms: ['HS256'] }),controller.getMyVehicles)
.get('/myvehicle/:id',jwt({ secret: process.env.JWT_SECRET, algorithms: ['HS256'] }),controller.getMyVehicle)
.patch('/myvehicles/:id',jwt({ secret: process.env.JWT_SECRET, algorithms: ['HS256'] }),uploadVehiclePic.single('image'),controller.postUpdate)
.delete('/myvehicles/:id',jwt({ secret: process.env.JWT_SECRET, algorithms: ['HS256'] }),controller.deleteMyVehicle)

module.exports = router;


