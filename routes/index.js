var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const sess = req.session;
  res.render('index', {
    nickname: sess.user_uid+1? users[sess.user_uid]['user_nickname'] : ''
  });});

module.exports = router;
