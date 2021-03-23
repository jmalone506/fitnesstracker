const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExcerciseSchema = new Schema({
    day: Date,
    exercise: [
        {
            _id: false,
            type: {
                type: String,
                trim: true,
                require:"What type is req"
            },
            name: {
                type: String,
                trim: true,
                require:"Name is req"
        },
            duration: {
                type: Number,
                trim: true,
                require:"Duration is req"
            },
            weight: {
                type: Number,
                trim: true,
                require:"Weights is req"
            },
            reps: {
                type: Number,
                trim: true,
                require:"reps are req"
        },
            sets: {
                type: Number,
                trim: true,
                require:"Sets are req"
        },
            distance: {
                type: Number,
                trim: true,
                require: false
        }
        }  
    ]
},
);

ExcerciseSchema.methods.currentDate = function(){
    this.day = Date.now();
    return this.day;
};
const Workout = mongoose.model("Workout", ExcerciseSchema);

module.exports = Workout;