require('shelljs/global');

var util = require("util");
var mkdirp = require('mkdirp');
var Inflector = require('inflected');
var tpl = require('tpl_apply');

// util.inherits(MyStream, events.EventEmitter);

// var file_path = __dirname;
// var current_path = process.cwd();
function getUserHome() {
  return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
}

var cache_path = getUserHome() + '/.express-g/';

mkdirp(cache_path, function (err) {
    if (err) console.error(err)
    else console.log('pow! create cache_path')
});

var _default_options = function (base_path){
  return {
    controller_path : base_path + '/controllers',
    model_path      : base_path + '/models',
    view_path       : base_path + '/views',
    route_path      : base_path + '/routes'  
  }
}

function _cp(des, src) {
  if (!des) {
    des = {};
  }
  if (src) {
    for (var i in src) {
      des[i] = src[i];
    }
  }
  return des;
}

function g (obj, opts) {
  this.model = obj;
  
  this.root_path = __dirname;
  this.base_path = obj.base_path;
  
  this.option = _default_options(this.base_path);
  
  _cp(this.option, opts);
  _cp(this, this.option);
  
  _mkdir(this);
}

function _mkdir(t){
  mkdirp(t.controller_path, function (err) {
      if (err) console.error(err)
      else console.log('pow! create controller_path')
  });
  
  mkdirp(t.model_path, function (err) {
      if (err) console.error(err)
      else console.log('pow! create model_path')
  });
  
  mkdirp(t.view_path, function (err) {
      if (err) console.error(err)
      else console.log('pow! create view_path')
  });
  
  mkdirp(t.route_path, function (err) {
      if (err) console.error(err)
      else console.log('pow! create route_path')
  });
}

g.prototype.c = function () {
  require('./lib/controller')(this)
}

g.prototype.m = function () {
  require('./lib/model')(this)
}

g.prototype.v = function () {
  require('./lib/view')(this)
}

g.prototype.r = function () {
  require('./lib/route')(this)
}

g.prototype.all = function () {
  this.c();
  this.m();
  this.v();
  this.r();
}

g.prototype.destroy = function () {
  var entity = this.model.entity;
  var cache_path = getUserHome() +'/.express-g/' + Date.now();
  
  mkdirp(cache_path, function (err) {
      if (err) console.error(err)
      else console.log('pow! create controller_path')
  });
  
  var c = this.controller_path  +'/'+ Inflector.pluralize(entity) + "_controller.js";
  var m = this.model_path  +'/'+ entity + ".js";
  var v = this.view_path  +'/'+ Inflector.pluralize(entity) + "/";
  var r = this.route_path  +'/'+ Inflector.pluralize(entity) + ".js";
  
  [c,m,v,r].forEach(function(file){
    mv('-f', file, cache_path + '/');
  });
}

module.exports = g;