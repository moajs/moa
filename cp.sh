#! /bin/bash


cp -f out/app/controllers/users_controller.js ../express-g-demo/app/controllers/
cp -f out/app/models/user.js ../express-g-demo/app/models/
cp -f out/app/routes/users.js ../express-g-demo/app/routes/
cp -rf out/app/views/users ../express-g-demo/app/views/