var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

/* GET Products page. THIS IS ONE ROUTE AND IT IS TO GET TO PROJECTS / ADDED NEW VARIABLES FOR DESCRIPTIONS OF PROJECTS*/
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects'});
});

/* GET Services page. THIS IS ONE ROUTE AND IT IS TO GET TO SERVICES*/
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services'});
});

/* GET About Me page. THIS IS ONE ROUTE AND IT IS TO GET TO ABOUT ME PAGE*/
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me',
name:"Dinu"});
});

/* GET Contact Us page. THIS IS ONE ROUTE AND IT IS TO GET TO CONTACT ADDED VARIABLES FOR MESSAGES IN CONTACT PAGE*/
router.get('/contacts', function(req, res, next) {
  res.render('contacts', { title: 'Contacts',
message:'Leave me a message' });
});

module.exports = router;

//Run "nodemon" and access this URL: http://localhost:3000/projects

//npmjs.com to take fonts