/**
 * Created by as on 2017/8/21.
 */

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./config/express');
var app = express();


app.listen(1314);
console.log('Server running at http://localhost:1314/');

module.exports = app;
