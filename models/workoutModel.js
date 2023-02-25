const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    title: {
        type: String,
        required: true,
        minLength: 5
    },
    reps: {
        type: Number,
        required: true,
        min: 0
    },
    load: {
        type: Number,
        required: true,
        min: 0
    },
    user_id: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;