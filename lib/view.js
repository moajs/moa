var Inflector = require('inflected');
var tpl = require('tpl_apply');
var fs = require('fs');


// var inflect = require('i')();


// movies_controller
function g(o) {

  this.entity = Inflector.camelize(o.model.entity);
  this.attrs = JSON.stringify(o.model.attr);
  this.model  = o.model.entity;
  this.models = Inflector.pluralize(o.model.entity);
  this.out_file_name = o.root_path  +'/out/';
  this.source_file = o.root_path + '/tpl/views/'
  
  var keypair = [];
  for(var k in o.model.attr){
    keypair.push( k + ": req.body." + k );
  }
  this.keypair = '{'+ keypair.join(',') + '}'
  
  var e = this.model;
  
  var views = ['edit','index', 'movie' ,'new','show']
  
  var out_file_name =  this.out_file_name + '' + e ;
  // 
  var is_exist = fs.existsSync(out_file_name);
  if(is_exist == true) {
    
    fs.readdirSync(out_file_name).forEach(function(file){
       fs.unlinkSync(out_file_name + '/' + file); 
    });
    fs.rmdirSync(out_file_name);
  }
  
  fs.mkdirSync(out_file_name);
  
  var t = this;
  views.forEach(function(i){
    var source  = this.source_file + '' + 'movies/' + i + '.jade';
    var dest    = out_file_name + '/' + i + '.jade';
    
    if(i == 'movie'){
      dest    = out_file_name + '/' + e + '.jade';
    }

    tpl.tpl_apply(source, t, dest);
  });
}

module.exports = g;