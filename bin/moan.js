#!/usr/bin/env node
require('shelljs/global');

var child_process = require('child_process');
var fs            = require('fs');

var argv = process.argv;
argv.shift();

if(argv.length < 1){
  return console.log('Usages: exn project_name');
}

var file_path  = __dirname;
var current_path  = process.cwd();
var project_name  = argv[1];
var home_dir      = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;


if (!which('git')) {
  echo('Sorry, this script requires git');
  exit(1);
}
var cache_dir = home_dir + '/.moa';
var folder_exists = fs.existsSync(cache_dir);
// console.log(home_dir + ' - ' + folder_exists);

for(var i in argv){
  var _argv = argv[i];
  if(_argv == '-f'  || _argv == '--force'){
    // rm('-rf', home_dir + '/.moa');
    folder_exists = false;
  }
}
// TODO: refact with promise
setTimeout(function(){

  if(!folder_exists){
    console.log('start clone moa-seed to ~/.moa');
    var clone = 'rm -rf ~/.moa && git clone --depth=1 https://github.com/moajs/moa-seed.git ' + '/' +cache_dir + ' && cd ~/.moa && moalink && cp config/default.example.json config/default.json   ';
    // Run external tool synchronously
    if (exec(clone).code !== 0) {
      echo('Error: Git clone failed');
      exit(1);
    }else{
      child_process.execFile(file_path + '/moan-after.sh', [], {cwd:current_path},function (error,stdout,stderr) {
        if (error !== null) {
          console.log('start moan-after.sh here exec error: ' + error);
        }else{
          echo('Success: moan clone finished!');
        }
      });
      
    }
  }else{
    console.log(cache_dir + ' is already exist, if you want update force,please use -f option');
  }

  child_process.execFile(file_path + '/moan-exist.sh', [project_name], {cwd:current_path},function (error,stdout,stderr) {
    if (error !== null) {
      console.log('start moan-a.sh here exec error: ' + error);
    }else{
      // console.log('start mongo here success!')
      
      echo('');
      echo('Congratulations! moan finished!');
      echo('');

      echo('step 0: 【修改配置】 cp config/default.example.json to config/default.json');
      echo('step 1: 【启动服务器】 npm start');
      echo('step 2: 【创建脚手架】 moag user name:string password:string uid:object');
      echo('step 3: 【如果需要，移除已有脚手架】 moad user');
      echo('Have a good day! Moaer');
    }
  });
}, 200);