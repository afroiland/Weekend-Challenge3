var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var index = require('./routes/index');
var calculator = require('./routes/calculator');

app.use(bodyParser.urlencoded({ extended: true }));




app.use('/calculator', calculator);

app.use('/', index);


app.set('port', process.env.PORT || 3000);

app.listen(process.env.PORT || 5000)
