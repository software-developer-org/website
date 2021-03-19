var express = require('express');
var router = express.Router();

/* GET home page. */
// eslint-disable-next-line no-unused-vars
router.get('/impressum', function (req, res, next) {
 res.render('impressum', { title: 'This is the Impressum Page' });
});

module.exports = router;
