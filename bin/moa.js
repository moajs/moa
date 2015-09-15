#!/usr/bin/env node
require('shelljs/global');

var program = require('commander');

var version = require('../package.json').version
program
  .version(version)
  .parse(process.argv);
//
// console.log('you ordered a pizza with:');
// if (program.peppers) console.log('  - peppers');
// if (program.pineapple) console.log('  - pineapple');
// if (program.bbqSauce) console.log('  - bbq');
// console.log('  - %s cheese', program.cheese);

echo('Moajs HELP:');
echo('');
echo('moan: 【创建新项目】 moan new_project_name');
echo('moag: 【创建脚手架】 moag user name:string password:string uid:object');
echo('moad: 【移除脚手架】 moad user');
echo('moas: 【启动服务器】 moas');
echo('');
echo('Have a good day! Moaer');
