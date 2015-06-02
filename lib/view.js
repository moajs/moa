var Inflector = require('inflected');
var tpl = require('tpl_apply');
var fs = require('fs');

// movies_controller
function g(o) {

  this.entity = Inflector.camelize(o.model.entity);
  this.attrs = JSON.stringify(o.model.attr);
  this.model  = o.model.entity;
  this.models = Inflector.pluralize(o.model.entity);
  this.out_file_name = o.view_path +'/';
  this.source_file = o.root_path + '/tpl/views/'
  
  var keys = [];
  var keypair = [];
  var model_dot_attrs = [];
  
  for(var k in o.model.attr){
    keypair.push( k + ": req.body." + k );
    keys.push("'" + k + "'");
    model_dot_attrs.push("'" + this.model + '.' + k + "'");
  }
  
  this.keypair = '{'+ keypair.join(',') + '}';
  this.keys = keys;
  this.model_dot_attrs = model_dot_attrs;
  
  var e = this.models;
  var e1 = this.model;
  
  var views = ['edit','index', 'movie' ,'new','show']
  
  var out_file_name =  this.out_file_name + '' + e ;
  // 
  console.log(this.out_file_name)
  
  var is_exist = fs.existsSync(out_file_name);
  if(is_exist == true) {
    
    fs.readdirSync(out_file_name).forEach(function(file){
       fs.unlinkSync(out_file_name + '/' + file); 
    });
    fs.rmdirSync(out_file_name);
  }
  
  var mkdirp = require('mkdirp');
  
  mkdirp(out_file_name, function (err) {
      if (err) console.error(err)
      else console.log('pow! create view_path')
  });
  
  var t = this;
  views.forEach(function(i){
    var source  = this.source_file + '' + 'movies/' + i + '.jade';
    var dest    = out_file_name + '/' + i + '.jade';
    
    if(i == 'movie'){
      dest = out_file_name + '/' + e1 + '.jade';
    }

    tpl.tpl_apply(source, t, dest);
  });
}

module.exports = g;