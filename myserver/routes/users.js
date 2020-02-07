var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({'message':'Got a POST request', 'contents':'req'});
});
router.post('/', function(req, res, next) {
    res.send({'message':'Got a POST request', 'contents':'req'});
  });
  router.put('/user', function(req, res, next) {
    res.send('Got a PUT request at /user');
  });
  router.delete('/user', function(req, res, next) {
    res.send('Got a DELETE request at /user');
  });

module.exports = router;
