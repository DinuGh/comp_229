
exports.home = function(req, res, next) {
    console.log('===> Original URL: ' + req.session.url);
      res.render(
        'home', { 
          title: 'Home',
          username: req.user ? req.user.username : ''
        });
    }

  exports.about = function(req, res, next) {
    res.render('about', { 
        title: 'About Me',
        username: req.user ? req.user.username : ''
     });
  }

  exports.projects = function(req, res, next) {
    res.render('projects', { 
      title: 'Projects',
      uiDemo: 'UI Demo',
      loadDemo: 'Load Demo',
      username: req.user ? req.user.username : '' 
    });
  }

  exports.services = function(req, res, next) {
    res.render('services', {
  title: 'Services',
  performance: 'Performance',
  stress: 'Stress',
  uiUx: 'UI/UX',
  api: 'API',
  bdd: 'BDD',
  unit: 'Unit',
  mobile: 'Mobile',
  penetration: 'Penetration',
  username: req.user ? req.user.username : ''   
  });
}

exports.contact = function(req, res, next) {
  res.render('contact', { 
title: 'Contact Me',
message:'Fan? Drop a note!',
username: req.user ? req.user.username : '' 
 });
}
