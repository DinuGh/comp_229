/*-- Assignment 2 Web Application Development COMP229 
          Dinu Gherciu, ID: 301268678, Fall 2022*/

let express = require('express');
let router = express.Router();
let usersController = require('../controllers/user');
let passport = require('passport');


/* GET Route for displaying the Sign Up page */
router.get('/signup', usersController.renderSignup);

/* POST Route for processing the Sign Up page */
router.post('/signup', usersController.signup);

/* GET Route for displaying the Login page */
router.get('/login', usersController.renderLogin);

/* POST Route for processing the Login page */
router.post('/login', usersController.login);

/* GET to perform Signout */
router.get('/signout', usersController.signout);

module.exports = router;
