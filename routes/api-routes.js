// API call from a class activity
const express = require("express");
const db = require("../models/schema");

module.exports = (app) => {
    app.get("/api/workouts", (request, response) => {
        db.find({}).then(data => {
            response.json(data);
        }).catch(err => {
            response.json(err);
        });
    });

    app.get("/api/workouts/range", (request, response) => {
        db.find({}).sort({ day: -1 }).limit(7).then(data => {
            response.json(data);
        }).catch(err => {
            response.json(err);
        });
    });

    app.put("/api/workouts/:id", (request, response) => {
        db.findByIdAndUpdate(request.params.id, { $push: { exercises: request.body } }, { new: true }).then(data => {
            response.json(data);
        }).catch(err => {
            response.json(err);
        });
    });

    app.post("/api/workouts", (request, response) => {
        db.create({}).then(data => {
            response.json(data);
        }).catch(err => {
            response.json(err);
        });
    });
};





