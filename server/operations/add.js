var express = require('express');
var router = express.Router();



function add(num1, num2){
  return num1+num2;
}

module.exports = add;
