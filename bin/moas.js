#!/usr/bin/env node
require('shelljs/global');

var child_process = require('child_process');

var argv = process.argv;
argv.shift();

// var file_path = __dirname;
var current_path = process.cwd();
console.log(current_path);

if(argv.length < 1){
  return console.log('Usages: exn project_name');
}

if (!which('git')) {
  echo('Sorry, this script requires git');
  exit(1);
}

process.chdir( current_path);
var clone = 'node ~/.moa/bin/www'
// Run external tool synchronously
if (exec(clone).code !== 0) {
  echo('Error: Moa server start failed');
  exit(1);
}else{
  echo('Success: Moa server start finished!');
}
 

echo('');
echo('Congratulations! moan finished!');
echo('');

echo('step 0: 【修改配置】 cp config/default.example.json to config/default.json');
echo('step 1: 【启动服务器】 npm start');
echo('step 2: 【创建脚手架】 moag user name:string password:string uid:object');
echo('step 3: 【如果需要，移除已有脚手架】 moad user');
echo('Have a good day! Moaer');
