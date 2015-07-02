var express = require('express');
var router = express.Router();

// var res_api       = require('res.api');
var $ = require('mount-controllers')(__dirname).{{models}}_controller;

var $middlewares  = require('mount-middlewares')(__dirname);

// route define
router.get('/', $middlewares.check_api_token, $.api.list);

router.post('/', $middlewares.check_api_token, $.api.create);

router.get('/:{{model}}_id', $middlewares.check_api_token, $.api.show);

router.patch('/:{{model}}_id', $middlewares.check_api_token, $.api.update);

router.delete('/:{{model}}_id', $middlewares.check_api_token, $.api.delete);


module.exports = router;
