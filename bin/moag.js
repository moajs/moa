#!/usr/bin/env node

var child_process = require('child_process');

var argv = process.argv;
argv.shift();

// var file_path = __dirname;
var current_path = process.cwd();

var model = {
  base_path : current_path + '/app',
  entity:'entity',
  attr:{}
}

if(argv.length < 2){
  return console.log('Usages: exg user name:string password:string');
}

model.entity = argv[1];

argv.shift();

for(var i in argv){
  var _attr = argv[i];
  
  if(argv[i].match(/:/g)){
    console.log('it is a attr');
    var _attr_arr = argv[i].split(':');
    var k = _attr_arr[0];
    var v = _attr_arr[1];
    model.attr[k] = v
  }
}

// main
var Generator = require('../index');
var g = new Generator(model,{});

g.all();