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


exports.controller_path = this.root_path + '/out/controllers'
exports.model_path = this.root_path + '/out/models'
exports.view_path = this.root_path + '/out/views'
exports.route_path = this.root_path + '/out/routes'

