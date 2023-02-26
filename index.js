require('dotenv').config();
const express = require('express');
const cors = require('cors');
const workoutRoute = require('./routes/workouts');
const mongoose = require('mongoose');
const imageRoute = require('./routes/imgRoute');
const userRoute = require('./routes/user');
const path = require('path');

const app = express();

// CORS
app.use(cors({
  origin: "http://localhost:3000"
}));

// MIDDLEWARE
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('CONNECTED TO THE DATABASE AND LISTENING ON PORT 4000!');
        });
    })
    .catch((err) => console.log(err.message))

// ROUTERS ---------------------------------------------
// HOME - ROUTER
app.get('/', (req, res) => {
    res.status(200).send('YOUR API WORKS!');
})

// WORKOUTS - ROUTER
app.use('/api/workouts', workoutRoute);

// IMAGE UPLOAD - ROUTER
app.use('/api/image', imageRoute);

// USER - LOGIN & SIGNUP ROUTER
app.use('/api/user' , userRoute);

// 404 PAGE - NOT FOUND
app.use((req, res) => {
    res.status(404).send('There is an error occured. 404 NOT FOUND!');
});

// static files (build of your frontend)
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../frontend', 'build')));
//     app.get('/*', (req, res) => {
//       res.sendFile(path.join(__dirname, '../frontend', 'build', 'index.html'));
//     })
// }

// USER ACCOUNT
// {
//     "email": "shin@example.com",
//     "password": "This12345!"
// }
// SECOND USER = zet@example.com