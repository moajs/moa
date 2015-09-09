#!/usr/bin/env node

var child_process = require('child_process');

var argv = process.argv;
argv.shift();

var file_path = __dirname;
var current_path = process.cwd();

var server_port = 3000;
var pre = '';

for(var i in argv){
  var _argv = argv[i];
  if(_argv == '-s'  || first_arg == '--sudo'){
    pre = 'sudo ';
  }
}

if ( argv.length > 1 ) {
  // console.log(argv)
  var first_arg = argv[1];
  if ( first_arg == '-h' || first_arg == '--help' ) {
    return console.log('Usages: km');
  }
}

var script = pre + " ps -ef|grep moas|awk '{print $2}'|xargs kill -9";

// execFile: executes a file with the specified arguments
child_process.exec(script,
  function (error, stdout, stderr) {
    if (error !== null) {
      console.log('km exec error: ' + error);
    }else{
      console.log("km exeute sucess!")
    }
});