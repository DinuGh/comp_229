var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { 
  title: 'Home',
  name:"Dinu"});
});

/* GET Products page. THIS IS ONE ROUTE AND IT IS TO GET TO PROJECTS / ADDED NEW VARIABLES FOR DESCRIPTIONS OF PROJECTS*/
router.get('/projects', function(req, res, next) {
  res.render('projects', { 
title: 'Projects',
uiDemo: 'UI Demo',
loadDemo: 'Load Demo'});
});

/* GET Services page. THIS IS ONE ROUTE AND IT IS TO GET TO SERVICES*/
router.get('/services', function(req, res, next) {
  res.render('services', {
title: 'Services',
performance: 'Performance',
stress: 'Stress',
uiUx: 'UI/UX',
api: 'API',
bdd: 'BDD',
unit: 'Unit',
mobile: 'Mobile',
penetration: 'Penetration'});
});

/* GET About Me page. THIS IS ONE ROUTE AND IT IS TO GET TO ABOUT ME PAGE*/
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me'});
});

/* GET Contact Us page. THIS IS ONE ROUTE AND IT IS TO GET TO CONTACT ADDED VARIABLES FOR MESSAGES IN CONTACT PAGE*/
router.get('/contacts', function(req, res, next) {
  res.render('contacts', { 
title: 'Contacts',
message:'Fan? Drop a note!'});
});

module.exports = router;

//Run "nodemon" and access this URL: http://localhost:3000/projects

//npmjs.com to take fonts