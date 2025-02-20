// This is where we define all the application's schema routes

const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

//router logic:
// GET /users/:userID/applications - 
// we use router. instead of app. cause we're in the applications.js page
// try/catch is a rudementary way to handle errors
router.get('/', (req, res) => {
    try {
        res.render('applications/index.ejs')
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});



module.exports = router;
