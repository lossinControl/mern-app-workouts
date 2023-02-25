const jwt = require('jsonwebtoken')
const User = require('../models/userModel');

const requireAUth = async (req, res, next) => {
    // VERIFY AUTHENTICATION
    const {authorization} = req.headers;

    if (!authorization) {
        return res.status(400).json({error: 'Authorization token is required!'});
    }

    const token = authorization.split(' ')[1];

    try {
        const {_id} = jwt.verify(token, process.env.SECRET);
        req.user = await User.findOne({_id}).select('_id');
        next();
    } catch (error) {
        console.log(error.message);
        res.status(404).json({error: 'Request is not authorized!'});
    }
    
}

module.exports = requireAUth;