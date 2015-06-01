var express = require('express');
var router = express.Router();

var $ = require('../controllers/{{models}}_controller');

/**
 * Auto generate RESTful url routes.
 *
 * URL routes:
 *
 *  GET    /{{models}}[/]        => {{model}}.list()
 *  GET    /{{models}}/new       => {{model}}.new()
 *  GET    /{{models}}/:id       => {{model}}.show()
 *  GET    /{{models}}/:id/edit  => {{model}}.edit()
 *  POST   /{{models}}[/]        => {{model}}.create()
 *  PATCH  /{{models}}/:id       => {{model}}.update()
 *  DELETE /{{models}}/:id       => {{model}}.destroy()
 *
 */

router.get('/new', $.new);  
router.get('/:id/edit', $.edit);

router.route('/')
  .get($.list)
  .post($.create);

router.route('/:id')
  .patch($.update)
  .get($.show)
  .delete($.destroy);


module.exports = router;
