var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});

/* CREATE user */
router.get('/createuser', function(req, res, next) {
  res.render('createuser', { title: 'Create User' });
});

module.exports = router;
