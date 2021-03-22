var express = require('express');
var router = express.Router();

/* GET home page. */
// eslint-disable-next-line no-unused-vars
router.get('/about', function (req, res, next) {
  res.render('about', { title: 'This is the About Page' });
});

module.exports = router;
