var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();
var obj = {};

app.use(bodyParser.urlencoded({ extended: true }));

router.post('/', function(req, res){
  obj = req.body;
  console.log(obj);
  res.sendStatus(201);
});

// router.get('/', function(req, res){
//   calculate(obj)
//   res.send();
// });

function calculate (number1, number2, operator){
  if (operator === add){
    return number1+number2;
  } else if (operator === subtract){
    return number1-number2;
  } else if (operator === multiply){
    return number1*number2;
  } else if (operator === divide){
    return number1/number2;
  }
}

module.exports = router;
