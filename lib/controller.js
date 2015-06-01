


var Inflector = require('inflected');
var tpl = require('tpl_apply');


// var inflect = require('i')();


// movies_controller
function g(o) {

  this.entity = Inflector.camelize(o.model.entity);
  
    // console.log(o);
  this.model  = o.model.entity;
  this.models = Inflector.pluralize(o.model.entity);
  this.out_file_name = o.root_path  +'/out/'+ Inflector.pluralize(o.model.entity) + "_controller.js";
  this.source_file = o.root_path + '/tpl/controllers/controller.js'
  
  console.log(this);
  
  var source = this.source_file;
  var dest = this.out_file_name;


  tpl.tpl_apply(source, this, dest);
}


g.prototype.ggg = function () {
  console.log(this);
  
  // 
  //
  //

  
}


module.exports = g;