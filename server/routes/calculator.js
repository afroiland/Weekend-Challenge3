var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();

var add = require('../operations/add');
var subtract = require('../operations/subtract');
var multiply = require('../operations/multiply');
var divide = require('../operations/divide');

var obj = {};

app.use(bodyParser.urlencoded({ extended: true }));

router.post('/', function(req, res){
  obj = req.body;
//  console.log(obj);
  res.sendStatus(201);
});

router.get('/', function(req, res){
  var answer = whichOperation(obj.firstNum, obj.secondNum, obj.operator);
  res.send(answer.toString());
  console.log(answer);
});

function whichOperation (num1, num2, operator){
  if (operator == "add"){
    return add(parseInt(num1), parseInt(num2));
  }else if (operator == "subtract"){
    return subtract(parseInt(num1), parseInt(num2));
  }else if (operator == "multiply"){
    return multiply(parseInt(num1), parseInt(num2));
  }else if (operator == "divide"){
    return divide(parseInt(num1), parseInt(num2));
  }
}

// function tempCalc(num1, num2, operator){
//   return (num1+num2);
// }

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
