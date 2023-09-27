const Vehicle = require('../models/Vehicle'); 
const fs=require("fs");

module.exports = {
    getHomePage: async (req, res) => {
        try {
            let vehicles = await Vehicle.find();
            let NewVehicles = vehicles.sort((a, b) => b.createdAt - a.createdAt).slice(0, 3);
            let PopularVehicles = vehicles.sort((a, b) => b.views - a.views).slice(0, 6);
            res.send({
                err: false,
                message: "List of vehicles",
                NewVehicles: NewVehicles,
                PopularVehicles: PopularVehicles
            });
        }
        catch (err) {
            res.send({
                err: true,
                message: err.message
            });
        }
    },
    getMyVehicles: async (req, res) => {
        try {
            vehicles = await Vehicle.find({ user: req.user.id })
            res.send({
                err: false,
                message: `List of vehicles from ${req.user.username}`,
                vehicles: vehicles
            })
        }
        catch (err) {
            res.send({
                err: true,
                message: err.message
            })
        }
    },
    getMyVehicle: async (req, res) => {
        try {
            vehicle = await Recipe.findById(req.params.id);
            res.send({
                err: false,
                message: `My vehicle`,
                vehicle: vehicle
            })
        }
        catch (err) {
            res.send({
                err: true,
                message: err.message
            })
        }
    },
    postVehicle: async (req, res) => {
        try {
            // req.body.user = req.user.id;
            if(req.file){req.body.image = `images/vehicles/${req.file.filename}`}
            else {req.body.image = "/images/vehicles/vehicle.png"};
            let vehicle = await Vehicle.create(req.body)
            res.send({
                err: false,
                message: `New vehicle created`,
                vehicle: vehicle
            })
        }
        catch (err) {
            res.send({
                err: true,
                message: err.message
            })
        }
    },
    postUpdate: async (req, res) => {
        try {
            req.body.user = req.user.id;
            vehicle= await Vehicle.findById(req.params.id);
            if(req.file) {
                req.body.image = `images/vehicles/${req.file.filename}`;
                if(recipe.image !== "/images/vehicles/vehicle.png" ){
                    fs.unlinkSync(`public/${vehicle.image}`)
                }
            }else{
                    req.body.image = vehicle.image
            }
            await Vehicle.findByIdAndUpdate(req.params.id,req.body)
            res.send({
                err: false,
                message: `Vehicle updated`
            })
        }
        catch (err) {
            res.send({
                err: true,
                message: err.message,
            })
        }
    },
    getCars: async (req, res) => {
        try {
            vehicles = await Vehicle.find({ category: "Cars" })
            res.send({
                err: false,
                message: `List of Cars`,
                vehicles: vehicles
            })
        }
        catch (err) {
            res.send({
                err: true,
                message: err.message
            })
        }
    },
    getTrucks: async (req, res) => {
        try {
            vehicles = await Vehicle.find({ category: "Trucks" })
            res.send({
                err: false,
                message: `List of Trucks`,
                vehicles: vehicles
            })
        }
        catch (err) {
            res.send({
                err: true,
                message: err.message
            })
        }
    },
    getBikes: async (req, res) => {
        try {
            vehicles = await Vehicle.find({ category: "Bikes" })
            res.send({
                err: false,
                message: `List of Bikes`,
                vehicles: vehicles
            })
        }
        catch (err) {
            res.send({
                err: true,
                message: err.message
            })
        }
    },
    getVehicle: async (req, res) => {
        try {
            vehicle = await Vehicle.findById(req.params.id);
            vehicle.views += 1;
            vehicle.save();
            res.send({
                err: false,
                message: "Vehicle",
                vehicle: vehicle
            })
        }
        catch (err) {
            res.send({
                err: true,
                message: err.message
            })
        }
    },
    deleteMyVehicle: async (req, res) => {
        try {
            vehicle = await Vehicle.findById(req.params.id);
            if (vehicle.image !== "/images/vehicles/vehicle.png")
            {fs.unlinkSync(`public/${vehicle.image}`)};
            await Vehicle.deleteOne({_id:req.params.id})
            res.send({
                err: false,
                message: "Vehicle deleted"
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