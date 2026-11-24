var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
//router.get('/item', function(req, res, next) {
//  res.render('Items', { title: 'Express' });
//});



module.exports = router;
