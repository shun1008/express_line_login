const express = require('express');
const router = express.Router();
const passport = require('passport');


router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get('/login', passport.authenticate('line'));

router.get('/callback',
  passport.authenticate('line', {failureRedirect: '/'}),
  function(req, res) {
    res.redirect('/');
  });


module.exports = router;
