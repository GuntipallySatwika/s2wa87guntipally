var express = require('express');
var router = express.Router();

/* GET computation page. */
router.get('/', function (req, res, next) {
  var r;
  
  var random = Math.random();
  console.log(req.query.r);
  r = req.query.r;

  // checking if url has params
  if (r == undefined) {
    r = random;
  }
  
  let log2 = Math.log2(r,r) 
  let cosh =Math.cosh(r)
  let floor = Math.floor(r)
 
  res.render('computation', {
    title: 'Computation',
    Calculate: `applied to ` + r  + ` is ` + log2 ,
    c1: `applied to ` + r + ` is ` + cosh,
    c2: `applied to ` + r + ` is ` + floor,
    
  });
});

module.exports = router;

