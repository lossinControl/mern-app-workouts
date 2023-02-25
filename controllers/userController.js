const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const { create } = require('../models/workoutModel');

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'});
}

// LOGIN USER
const loginUser = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.login(email, password);
        // CREATE TOKEN
        const token = createToken(user._id);
        res.status(200).json({email, token});
    } catch (error) {
        res.status(404).json({error: error.message});
    }
}

// SIGNUP USER
const signupUser = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.signup(email, password);
        // CREATE TOKEN
        const token = createToken(user._id);
        res.status(200).json({email, token});
    } catch (error) {
        res.status(404).json({error: error.message});
    }
}

module.exports = {
    loginUser, signupUser
}