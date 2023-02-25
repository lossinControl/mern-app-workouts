const express = require('express');
const {
    createWorkout, getWorkout, singleWorkout, deleteWorkout, updateWorkout
} = require('../controllers/workoutController');

const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

// REQUIRE AUTH FOR ALL ROUTES
router.use(requireAuth);

// GET ALL WORKOUTS
router.get('/', getWorkout);

// GET A SINGLE WORKOUT - BY ID
router.get('/:id', singleWorkout)

// POST - CREATE NEW WORKOUT
router.post('/', createWorkout);

// DELETE - DELETE A WORKOUT
router.delete('/:id', deleteWorkout);

// UPDATE - UPDATE A WORKOUT
router.patch('/:id', updateWorkout);

module.exports = router;