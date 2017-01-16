var express = require('express');
var router = express.Router();

router.get('/home', function(req, res, next) {
  if (req.xhr) {
    res.render('ng-templates/home');
  } else {
    res.redirect('/');
  }
});
router.get('/about', function(req, res, next) {
  if (req.xhr) {
    res.render('ng-templates/about');
  } else {
    res.redirect('/');
  }
});

module.exports = router;
