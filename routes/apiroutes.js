const express = require("express")
const router = express.Router()
const Exercise = require("../models/workouts");
const mongoose = require("mongoose");

router.post("/api/workouts", (req, res)=>{
    const newExercise = new Exercise(body);
    newExercise.currentDate();
    Exercise.create(newExercise)
        .then(data => {
            console.log(data)
            res.json(data)
        })
        .catch(err =>{
            console.log(err)
            res.json(err)
        });
});

router.get("/api/workouts", (req, res) => {
    Exercise.find({})
        .then(data =>{
            console.log(data)
            res.json(data);
        })
        .catch(err =>{
            res.json(err);
        })
});
router.put("/api/workouts/:id", (req, res) =>{
    Exercise.findOneAndUpdate({ _id: req.params.id}, {$push: { exercise: req.body} }, { new: true})
        .then(data =>{
            res.json(data)
        })
        .catch(err =>{
            res.json(err);
        })
})