const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

const {loginUser, signupUser} = require('../controllers/userController');

// API - GET
router.get('/', async (req, res) => {
    const user = await User.find();
    res.status(200).json(user);
});

// LOGIN ROUTE
router.post('/login', loginUser);

// SIGNUP ROUTE
router.post('/signup', signupUser);

module.exports = router;