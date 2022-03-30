var express = require('express');
const { param } = require('./users');
var router = express.Router();
var r = Math.random().toFixed(2);


console.log(r);
/* GET home page. */
router.get('/', function(req, res,next) {
  if (req.query.r != undefined) {
    r = req.query.r;
  }
  res.render('computation', { calculate: 'Cosh of ' +r+' is '+Math.cosh(r) });
});
module.exports = router;
