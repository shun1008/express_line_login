const express = require('express');
const router = express.Router();
const passport = require('passport');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

/* GET home page. */
router.get('/',forwardAuthenticated, function(req, res, next) {
  const user = req.user;
  res.render('index', { title: 'Express', user });
});




module.exports = router;
