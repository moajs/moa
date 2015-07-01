#!/usr/bin/env node

var current_path = process.cwd();
// console.log(__dirname)

var dirw = require('dirw');

var dest_path = 'node_modules2';

function main(){
  var root = __dirname.split('/')
  root.pop();

  var root_path = root.join('/')
  
  dirw.dir(root_path + '/node_modules', function(dir, dir_name){
    if(dir_name == 'bin' || dir_name == '.bin'){
      return;
    }
  
    _create_symlink(dir, dir_name)
  });
}

function _create_symlink(dir, dir_name) {
  var link = require('fs-symlink')
 
  link(dir, dest_path + '/' + dir_name,  'junction').then(function () {
    console.log('copy modudle ' + dir_name + ' finished');
  })
}

main();