/**
 * Created by admin on 2017/4/28.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('index', { title: 'formatDate',date:req.body  });
});

module.exports = router;
