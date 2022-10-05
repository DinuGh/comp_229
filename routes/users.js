var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Home');
});

router.get('/projects', function(req, res, next) {
  res.send('Projects');
});

router.get('/services', function(req, res, next) {
  res.send('Services');
});

router.get('/about', function(req, res, next) {
  res.send('About Me');
});

router.get('/contacts', function(req, res, next) {
  res.send('Contacts');
});


module.exports = router;
