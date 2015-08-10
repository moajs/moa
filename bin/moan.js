#!/usr/bin/env node
require('shelljs/global');

var child_process = require('child_process');
var fs            = require('fs');

var argv = process.argv;
argv.shift();

// var file_path = __dirname;
var current_path = process.cwd();


if(argv.length < 1){
  return console.log('Usages: exn project_name');
}


var project_name = argv[1];

var home_dir = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;


if (!which('git')) {
  echo('Sorry, this script requires git');
  exit(1);
}
var cache_dir = home_dir + '/.moa';
var folder_exists = fs.existsSync(cache_dir);
console.log(home_dir + ' - ' + folder_exists);

if(!folder_exists){
  var clone = 'git clone --depth=1 https://github.com/moajs/moa-seed.git '+ cache_dir;
  // Run external tool synchronously
  if (exec(clone).code !== 0) {
    echo('Error: Git clone failed');
    exit(1);
  }else{
    echo('Success: exn clone finished!');
  }
}else{
  console.log(cache_dir + ' is already exist, if you want update force,please use -f option');
}

var clone_cp = 'cp -rf ' + home_dir + '/.moa ' + project_name + '&& cd '+ project_name +' && npm install --save moa-plugin-user && cp config/default.example.json config/default.json';
console.log(clone_cp)
if (exec(clone_cp).code !== 0) {
  echo('Error: Git clone_cp failed');
  exit(1);
}else{
  echo('Success: exn clone_cp finished!');
}

var clone_post = 'rm -rf ' + project_name + '/.git && cd ' + project_name;
if (exec(clone_post).code !== 0) {
  echo('Error: Git clone_post failed');
  exit(1);
}else{
  echo('Success: exn clone_post finished!');
}

cd(project_name);

echo('npm install...');

var npm_install = 'moalink'
if (exec(npm_install).code !== 0) {
  echo('Error: npm_install failed');
  exit(1);
}else{
  echo('Success: npm_install finished!');
}

echo('');
echo('Congratulations! moan finished!');
echo('');

echo('step 0: 【修改配置】 cp config/default.example.json to config/default.json');
echo('step 1: 【启动服务器】 npm start');
echo('step 2: 【创建脚手架】 moag user name:string password:string uid:object');
echo('step 3: 【如果需要，移除已有脚手架】 moad user');
echo('Have a good day! Moaer');
