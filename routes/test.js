var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resourcedasdasdsa');
});
router.get('/123', function(req, res, next) {
  res.json({"123":"aaa"});
});
module.exports = router;
