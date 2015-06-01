var express = require('express');
var router = express.Router();

var $ = require('../controllers/movies_controller');

/**
 * Auto generate RESTful url routes.
 *
 * URL routes:
 *
 *  GET    /movies[/]        => movie.list()
 *  GET    /movies/new       => movie.new()
 *  GET    /movies/:id       => movie.show()
 *  GET    /movies/:id/edit  => movie.edit()
 *  POST   /movies[/]        => movie.create()
 *  PATCH  /movies/:id       => movie.update()
 *  DELETE /movies/:id       => movie.destroy()
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
