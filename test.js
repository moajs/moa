require('shelljs/global');

var child_process = require('child_process');
// var file_path = __dirname;
var current_path = process.cwd();

rm('-rf', 'out');

var base = current_path + '/out/app'

// Copy files to release dir
mkdir('-p', base + '/controllers');
mkdir('-p', base + '/models');
mkdir('-p', base + '/views');
mkdir('-p', base + '/routes');
//
//
// var model = {
//   base_path : base,
//   entity:'user',
//   attr:{
//     username: 'string',
//     password: 'string'
//   }
// }
//
// // var model = require('./')
// // var c = require('./lib/controller')(model)
// // var m = require('./lib/model')(model)
// // var v = require('./lib/view')(model)
// // var r = require('./lib/route')(model)
//
//
// var Generator = require('./index');
// var g = new Generator(model,{});
//
// g.all();