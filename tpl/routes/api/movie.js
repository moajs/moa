var express = require('express');
var router = express.Router();

var $ = require('mount-controllers').{{models}}_controller;

var $middlewares  = require('mount-middlewares');

// route define
router.get('/list', $middlewares.check_api_token, $.api.list);


module.exports = router;
