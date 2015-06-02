require('shelljs/global');

rm('-rf', 'out');

// Copy files to release dir
mkdir('-p', 'out/controllers');
mkdir('-p', 'out/models');
mkdir('-p', 'out/views');
mkdir('-p', 'out/routes');



var model = require('./')
var c = require('./lib/controller')(model)
var m = require('./lib/model')(model)
var v = require('./lib/view')(model)
var r = require('./lib/route')(model)

