var model ={
  entity:'user',
  attr:{
    username:'string',
    password: 'string'
  }
}


// var file_path = __dirname;
// var current_path = process.cwd();


exports.model = model;
exports.root_path = __dirname;
exports.base_path = __dirname;


exports.controller_path = this.base_path + '/out/app/controllers'
exports.model_path = this.base_path + '/out/app/models'
exports.view_path = this.base_path + '/out/app/views'
exports.route_path = this.base_path + '/out/app/routes'

