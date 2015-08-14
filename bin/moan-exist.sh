#! /bin/bash

project_name=$1

cp -r ~/.moa $project_name
cd $project_name && npm install --save moa-plugin-user 


echo 'moan finish!' 