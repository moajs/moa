var express = require('express');
var router = express.Router();

var $ = require('mount-controllers').{{models}}_controller;

var $middlewares  = require('mount-middlewares');

// route define
router.get('/list', $middlewares.check_api_token, $.api.list);

router.post('/', $middlewares.check_api_token, $.api.create);

router.get('/:{{model}}_id', $middlewares.check_api_token, $.api.show);

router.patch('/:{{model}}_id', $middlewares.check_api_token, $.api.update);

router.delete('/:{{model}}_id', $middlewares.check_api_token, $.api.delete);


module.exports = router;
