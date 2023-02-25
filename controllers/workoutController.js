const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');

// GET - ALL WORKOUTS
const getWorkout = async (req, res) => {
    
    const user_id = req.user._id;

    const workout = await Workout.find({user_id}).sort({createdAt: -1});
    res.status(200).json(workout);
}

// GET - SINGLE WORKOUT
const singleWorkout = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'workout not found!'})
    }
    const workout = await Workout.findById(id);
    if (!workout) {
        res.status(404).json({error: 'workout not found!'})
    }
    res.status(200).json(workout);
}

// CREATE - NEW WORKOUT
const createWorkout = async (req, res) => {
    const {title, reps, load} = req.body;
    try {
        const user_id = req.user._id;
        const workout = await Workout.create({title, reps, load, user_id})
        res.status(200).json(workout)
        console.log(req.body);
    } catch (error) {
        res.status(400).json({mssg: error.message})
    }
}

// DELETE - WORKOUT
const deleteWorkout = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'workout not found!'})
    }
    const workout = await Workout.findOneAndDelete({_id: id});
    if (!workout) {
        res.status(404).json({error: 'workout not found!'})
    }
    res.status(200).json(workout);
}

// UPDATE - WORKOUT
const updateWorkout = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'workout not found!'})
    }
    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    });
    if (!workout) {
        res.status(404).json({error: 'workout not found!'})
    }
    res.status(200).json(workout);
}

module.exports = {
    createWorkout, 
    getWorkout, 
    singleWorkout, 
    deleteWorkout,
    updateWorkout
}