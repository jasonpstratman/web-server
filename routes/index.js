var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/calculator', function(req, res, next) {
  res.render('calculator', { title: 'Express' });
});

router.post('/uploads', function(req, res) {

})

module.exports = router;
