var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Got a GET request');
});
router.post('/', function(req, res, next) {
    res.send('Got a POST request');
  });
  router.put('/user', function(req, res, next) {
    res.send('Got a PUT request at /user');
  });
  router.delete('/user', function(req, res, next) {
    res.send('Got a DELETE request at /user');
  });

module.exports = router;
