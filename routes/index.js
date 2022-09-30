var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/dinu', function(req, res, next) {
  res.render('index', { title: 'Dinu' });
});

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render(
//     'index', 
//     { 
//       title: 'Home', 
//       name: 'Julio'
//     }
//   );
// });

// router.get('/projects', function(req, res, next) {
//   res.render('main',  { 
//     title: 'Projects', 
//     name: 'Julio'
//   });
// });

module.exports = router;

//Run "nodemon" and access this URL: http://localhost:3000/dinu

//npmjs.com to take fonts