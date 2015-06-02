var Inflector = require('inflected');
var tpl = require('tpl_apply');

// movies_controller
function g(o) {

  this.entity = Inflector.camelize(o.model.entity);
  this.attrs = JSON.stringify(o.model.attr);
  // console.log(o);
  this.model  = o.model.entity;
  this.models = Inflector.pluralize(o.model.entity);
  this.out_file_name = o.controller_path  +'/'+ Inflector.pluralize(o.model.entity) + "_controller.js";
  this.source_file = o.root_path + '/tpl/controllers/controller.js'
  
  // console.log(this);
  
  var source = this.source_file;
  var dest = this.out_file_name;

  var keypair = [];
  for(var k in o.model.attr){
    keypair.push( k + ": req.body." + k );
  }
  this.keypair = '{'+ keypair.join(',') + '}'

  tpl.tpl_apply(source, this, dest);
}

module.exports = g;