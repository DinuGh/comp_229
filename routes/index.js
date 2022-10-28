/*-- Assignment 2 Web Application Development COMP229 
          Dinu Gherciu, ID: 301268678, Fall 2022*/
          
var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.home);

/* GET About page available on http://localhost:3000/about . */
router.get('/about', indexController.about);

/* GET Projects page. */
router.get('/projects', indexController.projects);

/* GET Services page. */
router.get('/services', indexController.services);

/* GET Contact page. */
router.get('/contact', indexController.contact);

module.exports = router;

//Run "nodemon" and access this URL: http://localhost:3000/projects

//In case of issues, delete package.json and run 'npm install'