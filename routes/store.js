const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const store = require('../controllers/store');


router.get('/list',ensureAuthenticated,function(req, res, next) {
    const user = req.user;
    //console.log(user);
    res.render('store_list', { title: 'Express', user });
  });

router.route('/')
    .post(ensureAuthenticated,store.create)
    .get(ensureAuthenticated,store.list_all);


router.route('/:name',ensureAuthenticated)
    .get(ensureAuthenticated,store.get)
    .delete(ensureAuthenticated,store.remove)
    .put(ensureAuthenticated,store.update);





module.exports = router;