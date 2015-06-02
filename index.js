var util = require("util");

// util.inherits(MyStream, events.EventEmitter);

// var file_path = __dirname;
// var current_path = process.cwd();

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

module.exports = g;