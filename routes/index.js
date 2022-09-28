var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/dinu', function(req, res, next) {
  res.render('index', { title: 'Dinu' });
});

module.exports = router;

//Run "nodemon" and access this URL: http://localhost:3000/dinu
