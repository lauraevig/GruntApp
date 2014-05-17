var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Hey', name:'Laura' });
});
router.get('/foo', function(req, res) {
  res.render('foo', { title: 'Hey', name:'Laura' });
});

module.exports = router;
