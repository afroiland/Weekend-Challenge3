var express = require('express');
var router = express.Router();
var path = require('path');

router.use('/', function(req, res) {
  var file = req.params[0] || '/views/index.html';
  res.sendFile(path.resolve(__dirname, '../public/', file));
});

module.exports = router;
