var Inflector = require('inflected');
var tpl = require('tpl_apply');

// movies_controller
function g(o) {

  this.entity = Inflector.camelize(o.model.entity);
  this.attrs = JSON.stringify(o.model.attr);
    // console.log(o);
  this.model  = o.model.entity;
  this.models = Inflector.pluralize(o.model.entity);
  this.out_file_name = o.model_path  +'/'+ o.model.entity + ".js";
  this.source_file = o.root_path + '/tpl/models/movie.js'
  
  // console.log(this);
  
  var source = this.source_file;
  var dest = this.out_file_name

  this.mongoose_attrs = get_mongoose_type_attrs(o.model.attr);

  tpl.tpl_apply(source, this, dest);
}
// name:string
function get_mongoose_type_attrs(attrs){
  var _attrs = attrs
  for(var k in attrs){
    var _new_type = _decode_mongoose_type(attrs[k]);
    
    _attrs[k] = _new_type;
  }
  
  console.log('_attrs = ' + _attrs)
  console.dir( _attrs)
  
  return JSON.stringify(_attrs)
}
/**
  • String -> string
  • Number-> number
  • Date -> date
  • Boolean -> boolean
  • Buffer -> buffer
  • ObjectId -> object
  • Mixed  -> mixed
  • Array -> array
*/ 
function _decode_mongoose_type(type){
  var _t = type.toLowerCase();
  
  if(_t == 'object' || _t == 'objectid' || _t == 'objectId'){
    _t = 'objectId';
  }
  
  return Inflector.camelize(_t);
}

module.exports = g;